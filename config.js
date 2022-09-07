import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBQzu0deztRBHYIUSHrtJW17B6NXdqoVAg",
    authDomain: "team-voting-app-d33c6.firebaseapp.com",
    databaseURL: "https://team-voting-app-d33c6-default-rtdb.firebaseio.com",
    projectId: "team-voting-app-d33c6",
    storageBucket: "team-voting-app-d33c6.appspot.com",
    messagingSenderId: "557249520705",
    appId: "1:557249520705:web:c947dc0e4ac8641d35d2c0"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();