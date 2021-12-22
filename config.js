import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCqCRWtHX--wLJQzgrK96B6u7PhYdXn6Ig",
    authDomain: "team-voting-f6c29.firebaseapp.com",
    projectId: "team-voting-f6c29",
    storageBucket: "team-voting-f6c29.appspot.com",
    messagingSenderId: "687870187166",
    appId: "1:687870187166:web:ed5e564ae66e494224cd8f",
    measurementId: "G-WY8KZKX32R"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();