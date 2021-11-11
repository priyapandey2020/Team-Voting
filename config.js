import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {

    apiKey: "AIzaSyCGfrLQ_E0dNeZ9Iu34CsBMKvmngHuurpU",
    authDomain: "team-voting-app-213fb.firebaseapp.com",
    databaseURL: "https://team-voting-app-213fb-default-rtdb.firebaseio.com",
    projectId: "team-voting-app-213fb",
    storageBucket: "team-voting-app-213fb.appspot.com",
    messagingSenderId: "1002418407802",
    appId: "1:1002418407802:web:d0a66dda4995c66193eec3"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
