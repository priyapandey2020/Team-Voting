import firebase from 'firebase';

// add SDK Firebase


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy-lEZXpYSV5ML-7W1HOCn3RjPujM92HY",
  authDomain: "team-voting-25cf0.firebaseapp.com",
  projectId: "team-voting-25cf0",
  storageBucket: "team-voting-25cf0.appspot.com",
  messagingSenderId: "291853734848",
  appId: "1:291853734848:web:063cd04e2a4bc055272e25",
  measurementId: "G-SPHGSFV3P4"
};

// Initialize Firebase


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();