import firebase from "firebase";

// add SDK Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL9k8qsUvt5RJuReKoJa_-A4WDS3waQGk",
  authDomain: "team-voting-2cad4.firebaseapp.com",
  projectId: "team-voting-2cad4",
  storageBucket: "team-voting-2cad4.appspot.com",
  messagingSenderId: "270255044647",
  appId: "1:270255044647:web:5f76e09b952b7e6e183602",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebase.database();
