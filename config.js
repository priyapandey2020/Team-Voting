import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCyiGbC9scAtWv-9KiT3rSFmEyWCJkFXvw",
    authDomain: "team-voting-d92b6.firebaseapp.com",
    databaseURL: "https://team-voting-d92b6-default-rtdb.firebaseio.com",
    projectId: "team-voting-d92b6",
    storageBucket: "team-voting-d92b6.appspot.com",
    messagingSenderId: "82497404759",
    appId: "1:82497404759:web:349278f6d9fbdb5f248812"
   
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();