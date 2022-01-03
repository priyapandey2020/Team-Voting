import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDK8qTtX_O1g5o8_Fbt-mx3OXT9_IwQM2o",
    authDomain: "team-voting-app-4618f.firebaseapp.com",
    databaseURL: "https://team-voting-app-4618f-default-rtdb.firebaseio.com",
    projectId: "team-voting-app-4618f",
    storageBucket: "team-voting-app-4618f.appspot.com",
    messagingSenderId: "767106643510",
    appId: "1:767106643510:web:798b028d616fb73b5f0a97"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();