// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCouAHkRqvCQZ1rX1oGUzYfG0ufvHC2Hig",
    authDomain: "react-firebase-project-29f43.firebaseapp.com",
    projectId: "react-firebase-project-29f43",
    storageBucket: "react-firebase-project-29f43.firebasestorage.app",
    messagingSenderId: "831153611740",
    appId: "1:831153611740:web:3ebc34166379518bb82519",
    measurementId: "G-WGGCH60HEZ",
    databaseURL: "https://react-firebase-project-29f43-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);