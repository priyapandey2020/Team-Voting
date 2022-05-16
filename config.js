import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyADQIcZ9A5YO_Jvip-gCBno1e7jWl6csMs",
    authDomain: "team-voting-app-dda17.firebaseapp.com",
    projectId: "team-voting-app-dda17",
    storageBucket: "team-voting-app-dda17.appspot.com",
    messagingSenderId: "609740959976",
    appId: "1:609740959976:web:6985f613490d785609595d"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();