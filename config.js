import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyB4sCRH9XtzgVylWijif570l01qzn3f9Cc",
    authDomain: "team-voting-50bec.firebaseapp.com",
    databaseURL: "https://team-voting-50bec-default-rtdb.firebaseio.com",
    projectId: "team-voting-50bec",
    storageBucket: "team-voting-50bec.appspot.com",
    messagingSenderId: "1060487203043",
    appId: "1:1060487203043:web:80b8886200ea026f03ddd6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();