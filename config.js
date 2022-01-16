import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB0YeRRGcOezxHXGQPszo8GODmlSmXdJ78",
    authDomain: "team-voting-23b4c.firebaseapp.com",
    databaseURL: "https://team-voting-23b4c-default-rtdb.firebaseio.com",
    projectId: "team-voting-23b4c",
    storageBucket: "team-voting-23b4c.appspot.com",
    messagingSenderId: "864777483199",
    appId: "1:864777483199:web:db55aca9769b66e4e9670a"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();