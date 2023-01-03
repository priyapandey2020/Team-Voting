import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyChCgxytor8lQ8SCZeYuYCwsN3pbls8yVU",
  authDomain: "pro-c67-73409.firebaseapp.com",
  projectId: "pro-c67-73409",
  storageBucket: "pro-c67-73409.appspot.com",
  messagingSenderId: "447012648620",
  appId: "1:447012648620:web:e4cb2a5d10bd34856dd109"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
