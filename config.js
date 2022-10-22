import firebase from 'firebase';

// add SDK Firebase

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2UNlq0kPFiaKr-qRz_acfJwwilasUCao",
    authDomain: "pro-c67-50270.firebaseapp.com",
    databaseURL: "https://pro-c67-50270-default-rtdb.firebaseio.com",
    projectId: "pro-c67-50270",
    storageBucket: "pro-c67-50270.appspot.com",
    messagingSenderId: "1048649394561",
    appId: "1:1048649394561:web:353b3cc4d9c65752702080"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();