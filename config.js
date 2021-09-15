import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDmF9vLwSi5GMEMvyUgtZbTd_M3VjlWxG8",
    authDomain: "teamvoting-6f814.firebaseapp.com",
    databaseURL: "https://teamvoting-6f814-default-rtdb.firebaseio.com",
    projectId: "teamvoting-6f814",
    storageBucket: "teamvoting-6f814.appspot.com",
    messagingSenderId: "171955522566",
    appId: "1:171955522566:web:754e0a3c782e2040078787"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();