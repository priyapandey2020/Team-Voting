import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDvdnQ6LNwOWD9JrMsOhNApsi65IUbbjfM",
  authDomain: "pro58-64b95.firebaseapp.com",
  databaseURL: "https://pro58-64b95-default-rtdb.firebaseio.com/",
  projectId: "pro58-64b95",
  storageBucket: "pro58-64b95.appspot.com",
  messagingSenderId: "323267909737",
  appId: "1:323267909737:web:9bd620fe26b26c9bceaaf8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
