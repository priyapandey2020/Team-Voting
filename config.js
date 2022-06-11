import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
 apiKey: "AIzaSyBpcRqC5RdqxZJChcWmj5Qn2WPRWZgdHqo",
  authDomain: "provoting-52535.firebaseapp.com",
  databaseURL: "https://provoting-52535-default-rtdb.firebaseio.com",
  projectId: "provoting-52535",
  storageBucket: "provoting-52535.appspot.com",
  messagingSenderId: "29773859775",
  appId: "1:29773859775:web:ad5dadd92f43d227452f0a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
