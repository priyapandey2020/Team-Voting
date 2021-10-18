import firebase from 'firebase';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTp8vNH03TZOpKltLmt5ObkppSKj9O4Kk",
  authDomain: "c-67-2b191.firebaseapp.com",
  projectId: "c-67-2b191",
  storageBucket: "c-67-2b191.appspot.com",
  messagingSenderId: "1017383796112",
  appId: "1:1017383796112:web:cab66142f7212edc244715"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var firebaseConfig = {

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();