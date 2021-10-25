import firebase from 'firebase';

// add SDK Firebase

    const firebaseConfig = {
        apiKey: "AIzaSyAjx0RYRmRa-ooNqrKBTbx7Q8GNgL_nx8Y",
        authDomain: "voting-app-58f9c.firebaseapp.com",
        projectId: "voting-app-58f9c",
        storageBucket: "voting-app-58f9c.appspot.com",
        messagingSenderId: "183537867889",
        appId: "1:183537867889:web:d325a9414760db0af48fd0"
      };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();