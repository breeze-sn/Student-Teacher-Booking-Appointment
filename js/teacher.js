const db = firebase.firestore();

// Add Teacher
document.getElementById('add-teacher-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('teacher-name').value;
    const department = document.getElementById('teacher-department').value;
    const subject = document.getElementById('teacher-subject').value;

    db.collection('teachers').add({
        name,
        department,
        subject
    }).then(() => {
        console.log("Teacher added successfully");
        loadTeachers(); // Refresh list
    }).catch((error) => {
        console.error("Error adding teacher: ", error);
    });
});

function loadTeachers() {
    db.collection('teachers').get().then((querySnapshot) => {
        const teachersList = document.getElementById('teachers-list');
        teachersList.innerHTML = '';
        querySnapshot.forEach((doc) => {
            const teacher = doc.data();
            const teacherItem = document.createElement('div');
            teacherItem.className = 'teacher-item';
            teacherItem.innerHTML = `<h3>${teacher.name}</h3><p>${teacher.department}</p><p>${teacher.subject}</p>`;
            teachersList.appendChild(teacherItem);
        });
    });
}

// Load teachers on page load
loadTeachers();
