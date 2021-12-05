import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBSBDF6Vgt-5cFVHUxQ0haUuiwrwmnv4Tk",
    authDomain: "team-voting-595b5.firebaseapp.com",
    databaseURL: "https://team-voting-595b5-default-rtdb.firebaseio.com",
    projectId: "team-voting-595b5",
    storageBucket: "team-voting-595b5.appspot.com",
    messagingSenderId: "476818606390",
    appId: "1:476818606390:web:565b384f853e20b55a0b97"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
