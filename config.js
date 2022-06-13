import firebase from 'firebase';

// add SDK Firebase

    const firebaseConfig = {
        apiKey: "AIzaSyDrusVmz3gJr9wVe5uwO8PwmfQISf_vuRY",
        authDomain: "teamvoting-121fa.firebaseapp.com",
        databaseURL: "https://teamvoting-121fa-default-rtdb.firebaseio.com",
        projectId: "teamvoting-121fa",
        storageBucket: "teamvoting-121fa.appspot.com",
        messagingSenderId: "47241563723",
        appId: "1:47241563723:web:bd33bee29cf8bfe776c7ce"
      }

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();