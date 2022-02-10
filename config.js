import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBju83pvIpb7QMwkUpcvnEbiwaW93hUOXw",
    authDomain: "team-voting-14f57.firebaseapp.com",
    projectId: "team-voting-14f57",
    storageBucket: "team-voting-14f57.appspot.com",
    messagingSenderId: "897454721059",
    appId: "1:897454721059:web:031461c67549dcdbf5c996"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();