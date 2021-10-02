import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyA9qNVtsIZQz3IzXSHg5KzV2MNJTJMJTkY",
  authDomain: "project-67-fe96f.firebaseapp.com",
  projectId: "project-67-fe96f",
  storageBucket: "project-67-fe96f.appspot.com",
  messagingSenderId: "157723169043",
  appId: "1:157723169043:web:fc2ac16769edfb1a020ae6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();