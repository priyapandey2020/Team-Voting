import firebase from 'firebase';

// add SDK Firebase

    const firebaseConfig = {
        apiKey: "AIzaSyBcjaY0H01qm6BqL547ZzFqPms6BWMi1Mo",
        authDomain: "voting-app-19be4.firebaseapp.com",
        databaseURL: "https://voting-app-19be4-default-rtdb.firebaseio.com",
        projectId: "voting-app-19be4",
        storageBucket: "voting-app-19be4.appspot.com",
        messagingSenderId: "281873710716",
        appId: "1:281873710716:web:c3fafc7b19071c9ebc93f9"
      
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();