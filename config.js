import firebase from 'firebase';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdjTakzw0li7KyB2Tqk6Hu_b58wiXX85c",
  authDomain: "teamvoting-c67df.firebaseapp.com",
  projectId: "teamvoting-c67df",
  storageBucket: "teamvoting-c67df.appspot.com",
  messagingSenderId: "1007118683533",
  appId: "1:1007118683533:web:e28295adf9f9d050d641c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default firebase.database();