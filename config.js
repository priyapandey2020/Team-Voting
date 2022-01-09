import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDmwIRMJ8jjYfVrMEQfoxkxa0MMwm5dOOc",
  authDomain: "team-d8d77.firebaseapp.com",
  databaseURL: "https://team-d8d77-default-rtdb.firebaseio.com",
  projectId: "team-d8d77",
  storageBucket: "team-d8d77.appspot.com",
  messagingSenderId: "54541033203",
  appId: "1:54541033203:web:e07f8aa954be98b6ed2186"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();