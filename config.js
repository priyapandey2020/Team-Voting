import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyCSt4ND7EY2ZrLSZRpo7-msvifHjqGMwms",
  authDomain: "project-67-fab74.firebaseapp.com",
  projectId: "project-67-fab74",
  storageBucket: "project-67-fab74.appspot.com",
  messagingSenderId: "357039541085",
  appId: "1:357039541085:web:a8fd2c64b1bf46264736b4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
