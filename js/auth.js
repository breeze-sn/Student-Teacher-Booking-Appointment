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
const auth = firebase.auth();

document.getElementById('login-button').addEventListener('click', () => {
    const email = prompt('Enter your email:');
    const password = prompt('Enter your password:');
    
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log('Logged in as:', userCredential.user.email);
            // Redirect to appropriate page based on user role
        })
        .catch((error) => {
            console.error('Error logging in:', error);
        });
});

document.getElementById('register-button').addEventListener('click', () => {
    const email = prompt('Enter your email:');
    const password = prompt('Enter your password:');
    
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log('Registered:', userCredential.user.email);
            // Redirect to appropriate page
        })
        .catch((error) => {
            console.error('Error registering:', error);
        });
});
