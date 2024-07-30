// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCz-foCWk6BcgLD2jf10qxszunelHYQMfM",
    authDomain: "student-teacher-booking-appoin.firebaseapp.com",
    projectId: "student-teacher-booking-appoin",
    storageBucket: "student-teacher-booking-appoin.appspot.com",
    messagingSenderId: "836495177603",
    appId: "1:836495177603:web:1fa69d21f2ca7f411f68b6",
    measurementId: "G-8HM5K8DD2M"
  };
firebase.initializeApp(firebaseConfig);

// Authentication State Listener
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        console.log("User is signed in:", user);
        document.getElementById('user-status').textContent = `Logged in as ${user.email}`;
        // Update UI for logged-in users
    } else {
        console.log("No user is signed in.");
        document.getElementById('user-status').textContent = "Not logged in";
        // Update UI for logged-out users
    }
});

// Logout Function
document.getElementById('logout-button').addEventListener('click', () => {
    firebase.auth().signOut().then(() => {
        console.log("User signed out successfully.");
        // Redirect to login page or update UI
        window.location.href = 'index.html';
    }).catch(error => {
        console.error("Error signing out: ", error);
    });
});

// Helper function to handle form submissions
function handleFormSubmit(formId, callback) {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            callback(new FormData(form));
        });
    } else {
        console.error(`Form with ID ${formId} not found.`);
    }
}

// Example of how to use the handleFormSubmit function
handleFormSubmit('example-form', (formData) => {
    // Example form data handling
    const exampleField = formData.get('example-field');
    console.log('Example Field:', exampleField);
    // Perform actions with the form data
});
