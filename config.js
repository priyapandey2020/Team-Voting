import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
        apiKey: "AIzaSyBXDIIm8BuP4a6YlUOlpyTS2PuUqWh3St8",
        authDomain: "team-ab0f5.firebaseapp.com",
        databaseURL: "https://team-ab0f5-default-rtdb.firebaseio.com",
        projectId: "team-ab0f5",
        storageBucket: "team-ab0f5.appspot.com",
        messagingSenderId: "563250617794",
        appId: "1:563250617794:web:3ba83b047fafa32a0cca5b",
        measurementId: "G-MMSE15DJNQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();