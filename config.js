import firebase from "firebase";

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAecfFprtk2PK-9X2dMUP1L3h_IKx5O94w",
  authDomain: "team-voting-d3538.firebaseapp.com",
  databaseURL: "https://team-voting-d3538-default-rtdb.firebaseio.com",
  projectId: "team-voting-d3538",
  storageBucket: "team-voting-d3538.appspot.com",
  messagingSenderId: "396992325071",
  appId: "1:396992325071:web:73ed35e4c75712f6075eba",
  measurementId: "G-0GD9FGPTBG",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
