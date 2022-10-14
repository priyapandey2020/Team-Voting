import firebase from 'firebase';

// add SDK Firebase

    const firebaseConfig = {
        apiKey: "AIzaSyBPsfJeBLqXzZlqH4PAlmvbQprWuvXPses",
        authDomain: "team-voting-36f4b.firebaseapp.com",
        databaseURL: "https://team-voting-36f4b-default-rtdb.firebaseio.com",
        projectId: "team-voting-36f4b",
        storageBucket: "team-voting-36f4b.appspot.com",
        messagingSenderId: "702023632754",
        appId: "1:702023632754:web:7a421d7876e364aceeffeb"
      };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();