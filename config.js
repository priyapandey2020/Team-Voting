import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDXKMk0YuULNgI0yS6qpcq7V77aItd8Ppc",
  authDomain: "project-58-641f8.firebaseapp.com",
  databaseURL: "https://project-58-641f8-default-rtdb.firebaseio.com",
  projectId: "project-58-641f8",
  storageBucket: "project-58-641f8.appspot.com",
  messagingSenderId: "392337973002",
  appId: "1:392337973002:web:17a0f78ed6fcfeb9b2e4f3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();