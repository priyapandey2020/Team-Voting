import firebase from 'firebase';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-WP4wGsLdhxohP1q9kMeAF-bMRfc6OHY",
  authDomain: "class-test-6b685.firebaseapp.com",
  projectId: "class-test-6b685",
  storageBucket: "class-test-6b685.appspot.com",
  messagingSenderId: "907365849603",
  appId: "1:907365849603:web:ada3dae5ea2a1af49a0c36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase.database();