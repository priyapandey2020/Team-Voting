import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAB7zvgFITroKWuWYB3RfXWSJ2_Cz5V2Ac",
    authDomain: "team-voting-0904.firebaseapp.com",
    projectId: "team-voting-0904",
    storageBucket: "team-voting-0904.appspot.com",
    messagingSenderId: "1092694076126",
    appId: "1:1092694076126:web:130ef98c57ee99d7f9704f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();