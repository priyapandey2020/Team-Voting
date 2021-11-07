import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA59PhXr_a128sFD2LOOVHym8g9_tnfFsk",
    authDomain: "votingapp-7aa89.firebaseapp.com",
    projectId: "votingapp-7aa89",
    storageBucket: "votingapp-7aa89.appspot.com",
    messagingSenderId: "1037353074332",
    appId: "1:1037353074332:web:a73d98ef927ade42b43759"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();