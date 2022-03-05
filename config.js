import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAhgo15he3VKn64ronWWZIzuKCXZXrmSwg",
    authDomain: "team-voting-app-8502d.firebaseapp.com",
    databaseURL: "https://team-voting-app-8502d-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "team-voting-app-8502d",
    storageBucket: "team-voting-app-8502d.appspot.com",
    messagingSenderId: "919898480093",
    appId: "1:919898480093:web:86609dff3adfb5aec9ea34"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();