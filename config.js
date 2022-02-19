import firebase from 'firebase';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP-Mx1zUEPQXbx4WbtJa3LIcBQ-xUCr5g",
  authDomain: "classtest-bdf59.firebaseapp.com",
  projectId: "classtest-bdf59",
  storageBucket: "classtest-bdf59.appspot.com",
  messagingSenderId: "459974254708",
  appId: "1:459974254708:web:6c2d0c384d9ad8b4407121"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();