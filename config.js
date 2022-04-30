import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAkSuW07nFhotj4Jwm3l353vHvDKZ0v3yU",
    authDomain: "classtest-c1d83.firebaseapp.com",
    databaseURL: "https://classtest-c1d83-default-rtdb.firebaseio.com",
    projectId: "classtest-c1d83",
    storageBucket: "classtest-c1d83.appspot.com",
    messagingSenderId: "869498591782",
    appId: "1:869498591782:web:e19d8aaf7bf362fc0764e7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();