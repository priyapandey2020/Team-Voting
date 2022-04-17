import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyA8yhv2rTSMUnFhJ6-U1JOKIxFr4aFTz_w",
  authDomain: "teamvoting-72d29.firebaseapp.com",
  projectId: "teamvoting-72d29",
  storageBucket: "teamvoting-72d29.appspot.com",
  messagingSenderId: "570268434798",
  appId: "1:570268434798:web:efb8f06fe6af5db655817f",
  measurementId: "G-XH2X28NQEQ"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
