import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCtJztAE0L79S9FbNeAJz8-m6Tkfm9f74M",
    authDomain: "project-67-6b9e9.firebaseapp.com",
    databaseURL: "https://project-67-6b9e9-default-rtdb.firebaseio.com",
    projectId: "project-67-6b9e9",
    storageBucket: "project-67-6b9e9.appspot.com",
    messagingSenderId: "182404284223",
    appId: "1:182404284223:web:a054931bf992867122dd8a"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();