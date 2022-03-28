import firebase from 'firebase';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtPYqlh4OzVCeAKr5bFNQ43eFF4ZokA5s",
  authDomain: "classtest-465d7.firebaseapp.com",
  databaseURL: "https://classtest-465d7-default-rtdb.firebaseio.com",
  projectId: "classtest-465d7",
  storageBucket: "classtest-465d7.appspot.com",
  messagingSenderId: "420232381045",
  appId: "1:420232381045:web:8a3ea38bb447964b2fae3c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
