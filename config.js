import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyC1A-EEkRBvTPcUl9EIYZ1pnN7nkGZz3D8",
  authDomain: "voting-app-16f07.firebaseapp.com",
  projectId: "voting-app-16f07",
  storageBucket: "voting-app-16f07.appspot.com",
  messagingSenderId: "133792976933",
  appId: "1:133792976933:web:48228278028c0e98a76fcc",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();