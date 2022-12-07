import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
   apiKey: "AIzaSyBqEEvbVkSdgiuZNJVgG3GIbIbKjpf9Mso",
  authDomain: "project-6f867.firebaseapp.com",
  databaseURL: "https://project-6f867-default-rtdb.firebaseio.com",
  projectId: "project-6f867",
  storageBucket: "project-6f867.appspot.com",
  messagingSenderId: "186790416378",
  appId: "1:186790416378:web:31ded727ba7da05b779e43"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
