import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAMMfptp3bcNT10hb_ac7uMGdXET243hmA",
    authDomain: "team-voting-c7046.firebaseapp.com",
    databaseURL: "https://team-voting-c7046-default-rtdb.firebaseio.com",
    projectId: "team-voting-c7046",
    storageBucket: "team-voting-c7046.appspot.com",
    messagingSenderId: "601269182929",
    appId: "1:601269182929:web:d52fd3be8b717a6014c0f0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();