import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
 apiKey: "AIzaSyBAdR3axPTbDt49m1dxNIZklVfr9vDoFxk",
  authDomain: "class-project-52739.firebaseapp.com",
  databaseURL: "https://class-project-52739-default-rtdb.firebaseio.com",
  projectId: "class-project-52739",
  storageBucket: "class-project-52739.appspot.com",
  messagingSenderId: "268290708853",
  appId: "1:268290708853:web:989e06fc740681fa7caf3c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
