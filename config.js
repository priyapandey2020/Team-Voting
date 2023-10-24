import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyCkhRjHwlg21M291ga4D9AYHE4zmb8MGsk",
  authDomain: "testprojects-49805.firebaseapp.com",
  databaseURL: "https://testprojects-49805-default-rtdb.firebaseio.com",
  projectId: "testprojects-49805",
  storageBucket: "testprojects-49805.appspot.com",
  messagingSenderId: "792721515733",
  appId: "1:792721515733:web:0581e6ea9b6290f456ee5c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
