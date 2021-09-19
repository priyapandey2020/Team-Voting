import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
        apiKey: "AIzaSyBe6P8eSN6wk_wn6YsIMT6l5dBlT5XdAH8",
        authDomain: "voting-app-3b147.firebaseapp.com",
        projectId: "voting-app-3b147",
        storageBucket: "voting-app-3b147.appspot.com",
        messagingSenderId: "566491736694",
        appId: "1:566491736694:web:674da03e38c9007e0a0d57"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();