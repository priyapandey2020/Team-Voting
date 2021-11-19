import firebase from 'firebase';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQWkxVFX9Ve0nYIW2WK3eNZuPx8miFZaI",
  authDomain: "voting-project-d7d86.firebaseapp.com",
  projectId: "voting-project-d7d86",
  storageBucket: "voting-project-d7d86.appspot.com",
  messagingSenderId: "807825174980",
  appId: "1:807825174980:web:920c54021f925bb25eb491"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var firebaseConfig = {

};
export default firebase.database();