import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA9DKeUjTzK8fySNm34sAhj__Z_2imaJL0",
    authDomain: "pro-c67-a36ab.firebaseapp.com",
    databaseURL: "https://pro-c67-a36ab-default-rtdb.firebaseio.com",
    projectId: "pro-c67-a36ab",
    storageBucket: "pro-c67-a36ab.appspot.com",
    messagingSenderId: "1014264731859",
    appId: "1:1014264731859:web:4bc25d745b0885ddaa1c26"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();