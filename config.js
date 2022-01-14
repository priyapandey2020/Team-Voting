import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
        apiKey: "AIzaSyDzhYvlFdpC47bOxks0hg70bACMSPHJYqE",
        authDomain: "voting-app-6b2f8.firebaseapp.com",
        databaseURL: "https://voting-app-6b2f8-default-rtdb.firebaseio.com",
        projectId: "voting-app-6b2f8",
        storageBucket: "voting-app-6b2f8.appspot.com",
        messagingSenderId: "209423201637",
        appId: "1:209423201637:web:1eca8621bf5096ed189d8c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();