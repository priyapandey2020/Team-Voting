import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyC-B3dc7hPZeUD2pxSKRN9tReDniCs-PSI",
  authDomain: "project-67-81bc0.firebaseapp.com",
  projectId: "project-67-81bc0",
  storageBucket: "project-67-81bc0.appspot.com",
  messagingSenderId: "522291768022",
  appId: "1:522291768022:web:1c2185924432879b26b777"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
