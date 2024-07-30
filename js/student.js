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

// Function to display students awaiting approval
function displayStudents() {
    const studentList = document.getElementById('student-list');
    db.collection('students').where('approved', '==', false).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const li = document.createElement('li');
            li.textContent = doc.data().name;
            const approveButton = document.createElement('button');
            approveButton.textContent = 'Approve';
            approveButton.onclick = () => approveStudent(doc.id);
            li.appendChild(approveButton);
            studentList.appendChild(li);
        });
    });
}

// Function to approve student
function approveStudent(studentId) {
    db.collection('students').doc(studentId).update({ approved: true }).then(() => {
        alert('Student approved successfully');
        displayStudents(); // Refresh the list
    }).catch((error) => {
        console.error("Error approving student: ", error);
    });
}

// Initial display of students
displayStudents();
