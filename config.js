import firebase from 'firebase';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDMnRO-tprgGiWCUcno2d3rDmKCR3pMqY",
  authDomain: "project-67-1472e.firebaseapp.com",
  projectId: "project-67-1472e",
  storageBucket: "project-67-1472e.appspot.com",
  messagingSenderId: "794148668728",
  appId: "1:794148668728:web:4ab4b009ff44cdeb4c6dcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase.database();