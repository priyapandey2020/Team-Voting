import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAeg1O-oiPjZZ9E5lmm2D-bXB_QpxSVQn0",
    authDomain: "team-f0078.firebaseapp.com",
    databaseURL: "https://team-f0078-default-rtdb.firebaseio.com",
    projectId: "team-f0078",
    storageBucket: "team-f0078.appspot.com",
    messagingSenderId: "23837853155",
    appId: "1:23837853155:web:9ee1a964f66290b7ab4cd6"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();