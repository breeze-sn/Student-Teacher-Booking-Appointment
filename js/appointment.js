// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCz-foCWk6BcgLD2jf10qxszunelHYQMfM",
    authDomain: "student-teacher-booking-appoin.firebaseapp.com",
    projectId: "student-teacher-booking-appoin",
    storageBucket: "student-teacher-booking-appoin.appspot.com",
    messagingSenderId: "836495177603",
    appId: "1:836495177603:web:1fa69d21f2ca7f411f68b6",
    measurementId: "G-8HM5K8DD2M"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Schedule an appointment
document.getElementById('appointment-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const studentName = document.getElementById('student-name').value;
    const teacherName = document.getElementById('teacher-name').value;
    const appointmentTime = document.getElementById('appointment-time').value;

    db.collection('appointments').add({
        studentName,
        teacherName,
        appointmentTime,
        approved: false
    }).then(() => {
        alert('Appointment scheduled successfully');
        displayAppointments();
    }).catch((error) => {
        console.error("Error scheduling appointment: ", error);
    });
});

// Display appointments
function displayAppointments() {
    const appointmentList = document.getElementById('appointment-list');
    appointmentList.innerHTML = '';
    db.collection('appointments').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const li = document.createElement('li');
            const data = doc.data();
            li.textContent = `${data.studentName} with ${data.teacherName} at ${data.appointmentTime}`;
            const approveButton = document.createElement('button');
            approveButton.textContent = 'Approve';
            approveButton.onclick = () => approveAppointment(doc.id);
            const cancelButton = document.createElement('button');
            cancelButton.textContent = 'Cancel';
            cancelButton.onclick = () => cancelAppointment(doc.id);
            li.appendChild(approveButton);
            li.appendChild(cancelButton);
            appointmentList.appendChild(li);
        });
    });
}

// Approve appointment
function approveAppointment(appointmentId) {
    db.collection('appointments').doc(appointmentId).update({ approved: true }).then(() => {
        alert('Appointment approved successfully');
        displayAppointments();
    }).catch((error) => {
        console.error("Error approving appointment: ", error);
    });
}

// Cancel appointment
function cancelAppointment(appointmentId) {
    db.collection('appointments').doc(appointmentId).delete().then(() => {
        alert('Appointment canceled successfully');
        displayAppointments();
    }).catch((error) => {
        console.error("Error canceling appointment: ", error);
    });
}

// Initial display of appointments
displayAppointments();
