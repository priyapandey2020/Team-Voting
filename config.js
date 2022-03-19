import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCIBW6HAz31jmOqSCB3dVkQWYftVVAw62g",
    authDomain: "classtest-91d79.firebaseapp.com",
    projectId: "classtest-91d79",
    storageBucket: "classtest-91d79.appspot.com",
    messagingSenderId: "572816507989",
    appId: "1:572816507989:web:1d7971458efdb7a56c00dc"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();