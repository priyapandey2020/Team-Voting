import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAvnjiUJ6vm4wYfum8TXQAwuDQzSTbb4sg",
    authDomain: "project-67-3be38.firebaseapp.com",
    databaseURL: "https://project-67-3be38-default-rtdb.firebaseio.com",
    projectId: "project-67-3be38",
    storageBucket: "project-67-3be38.appspot.com",
    messagingSenderId: "84128876801",
    appId: "1:84128876801:web:fd50f19ae71e683ddc3300"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();