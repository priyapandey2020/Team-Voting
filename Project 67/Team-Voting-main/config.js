import firebase from 'firebase';

// add SDK Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyDZJwrCSSSKqTJFOxpjm4-IS9i6LRQ7X80",
        authDomain: "voting-app-18655.firebaseapp.com",
        databaseURL: "https://voting-app-18655-default-rtdb.firebaseio.com",
        projectId: "voting-app-18655",
        storageBucket: "voting-app-18655.appspot.com",
        messagingSenderId: "153285937248",
        appId: "1:153285937248:web:2f15f095b04416474e1b05"
      };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();