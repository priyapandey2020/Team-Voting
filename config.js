import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
   
        apiKey: "AIzaSyBCNxufjKjEL2qXNZHo0XMI0nS7aSkZoOo",
        authDomain: "voting-app-1ac90.firebaseapp.com",
        projectId: "voting-app-1ac90",
        storageBucket: "voting-app-1ac90.appspot.com",
        messagingSenderId: "400726851629",
        appId: "1:400726851629:web:ddb0728c3b3835a25438a4"
      };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();