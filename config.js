import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYZGHlX653FYmRZA0-j_E6pbSBy1ljA9s",
  authDomain: "class-67-9f6ff.firebaseapp.com",
  databaseURL: "https://class-67-9f6ff-default-rtdb.firebaseio.com",
  projectId: "class-67-9f6ff",
  storageBucket: "class-67-9f6ff.appspot.com",
  messagingSenderId: "440520164798",
  appId: "1:440520164798:web:98f1456b290976ddb5a5ef"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
