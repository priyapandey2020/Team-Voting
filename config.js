import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCe3pmj7JR7nGuiUeGYdN1mPBXwfjEKfuA",
    authDomain: "team-voting-app-db152.firebaseapp.com",
    databaseURL: "https://team-voting-app-db152-default-rtdb.firebaseio.com",
    projectId: "team-voting-app-db152",
    storageBucket: "team-voting-app-db152.appspot.com",
    messagingSenderId: "791511843875",
    appId: "1:791511843875:web:3406bdac657c1d59495d96",
    measurementId: "G-YRDY7BFS85"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();