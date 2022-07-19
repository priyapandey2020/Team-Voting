import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyADj5MxwbVQYjthK6kkyYewjCnzMbkCESQ",
    authDomain: "buzzer-app-39cf8.firebaseapp.com",
    databaseURL: "https://buzzer-app-39cf8-default-rtdb.firebaseio.com",
    projectId: "buzzer-app-39cf8",
    storageBucket: "buzzer-app-39cf8.appspot.com",
    messagingSenderId: "36404657929",
    appId: "1:36404657929:web:bbff8482fc0acda8af1dd8"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();