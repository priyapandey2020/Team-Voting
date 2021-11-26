import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
   
        apiKey: "AIzaSyAXGIWAE9VfleKp6L9Dtbxl9trYRzsx3NY",
        authDomain: "team-voting-70d7e.firebaseapp.com",
        databaseURL: "https://team-voting-70d7e-default-rtdb.firebaseio.com",
        projectId: "team-voting-70d7e",
        storageBucket: "team-voting-70d7e.appspot.com",
        messagingSenderId: "906796797407",
        appId: "1:906796797407:web:62a6ef30531b3e5ef4486a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();