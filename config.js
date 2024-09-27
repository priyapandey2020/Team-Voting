import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAgftNdEuigDmzlVFWwWpxw3dfyaDrJ6XM",
    authDomain: "team-voting-12a9e.firebaseapp.com",
    databaseURL: "https://team-voting-12a9e-default-rtdb.firebaseio.com",
    projectId: "team-voting-12a9e",
    storageBucket: "team-voting-12a9e.appspot.com",
    messagingSenderId: "1068948993556",
    appId: "1:1068948993556:web:149cf1c439bc1e67e11901"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();