import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDSMMW_OL97dKOtF4_HXNhGhR--8-8FlLM",
    authDomain: "project-58-8568b.firebaseapp.com",
    databaseURL: "https://project-58-8568b-default-rtdb.firebaseio.com",
    projectId: "project-58-8568b",
    storageBucket: "project-58-8568b.appspot.com",
    messagingSenderId: "266090156468",
    appId: "1:266090156468:web:4e899726c0e13a320622e1"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();