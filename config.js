import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB66frAet7xcGrqWojs4wLIgD_jIV5T9c8",
    authDomain: "my-voting-app-4dcb4.firebaseapp.com",
    databaseURL: "https://my-voting-app-4dcb4-default-rtdb.firebaseio.com",
    projectId: "my-voting-app-4dcb4",
    storageBucket: "my-voting-app-4dcb4.appspot.com",
    messagingSenderId: "370008302143",
    appId: "1:370008302143:web:8108ce67a7be669de18e8a",
    measurementId: "G-8L3FWCJ6S0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();