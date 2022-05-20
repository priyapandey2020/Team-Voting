import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAA08J17_lD2hnQhQ5gyG0CyOgPSiQhOwk",
    authDomain: "pro-67-45e75.firebaseapp.com",
    projectId: "pro-67-45e75",
    storageBucket: "pro-67-45e75.appspot.com",
    messagingSenderId: "207584160865",
    appId: "1:207584160865:web:95c75f33249209e3a98e20"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();