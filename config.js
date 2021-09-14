import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBTrUxwg1uiy4o9G-NA1pJN4rIts8e-5CQ",
    authDomain: "quiz-buzer-app.firebaseapp.com",
    projectId: "quiz-buzer-app",
    storageBucket: "quiz-buzer-app.appspot.com",
    messagingSenderId: "611787392909",
    appId: "1:611787392909:web:15dd238b875dffae7b5fc4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();