import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
 apiKey: "AIzaSyBbNbjxHujioYH_DJgXBhWkwJdADfaKzN8",
  authDomain: "project-67-428e1.firebaseapp.com",
  databaseURL: "https://project-67-428e1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-67-428e1",
  storageBucket: "project-67-428e1.appspot.com",
  messagingSenderId: "596528855314",
  appId: "1:596528855314:web:1dbbc2539d9dc62e215bcb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
