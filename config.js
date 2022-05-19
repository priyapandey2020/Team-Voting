import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDc1aQDBOu8mQg_fQA0wUVKds5PQdu6hug",
    authDomain: "project-57-72a28.firebaseapp.com",
    databaseURL: "https://project-57-72a28-default-rtdb.firebaseio.com",
    projectId: "project-57-72a28",
    storageBucket: "project-57-72a28.appspot.com",
    messagingSenderId: "1071516330855",
    appId: "1:1071516330855:web:eb967fb1b1f40b98ec9dc2",
    measurementId: "G-5ZLSXXHNPC"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();