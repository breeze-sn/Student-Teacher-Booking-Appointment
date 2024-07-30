// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCz-foCWk6BcgLD2jf10qxszunelHYQMfM",
    authDomain: "student-teacher-booking-appoin.firebaseapp.com",
    projectId: "student-teacher-booking-appoin",
    storageBucket: "student-teacher-booking-appoin.appspot.com",
    messagingSenderId: "836495177603",
    appId: "1:836495177603:web:1fa69d21f2ca7f411f68b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
