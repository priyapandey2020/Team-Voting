import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDWnti2Zsym5R0rDmHtOIWN9r-sNIbSrPo",
    authDomain: "team-voting-app-c-67.firebaseapp.com",
    databaseURL: "https://team-voting-app-c-67-default-rtdb.firebaseio.com",
    projectId: "team-voting-app-c-67",
    storageBucket: "team-voting-app-c-67.appspot.com",
    messagingSenderId: "308570710554",
    appId: "1:308570710554:web:2cd97cdd9150431ea9a7a3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();