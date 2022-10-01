import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDhK3SAvBXhf5KU9OwvTgLom-n4JEhRgTA",
    authDomain: "p-68-a500e.firebaseapp.com",
    databaseURL: "https://p-68-a500e-default-rtdb.firebaseio.com",
    projectId: "p-68-a500e",
    storageBucket: "p-68-a500e.appspot.com",
    messagingSenderId: "230759487422",
    appId: "1:230759487422:web:29b06d46d64870d3438bef",
    measurementId: "G-DKFLXPPD0K"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();