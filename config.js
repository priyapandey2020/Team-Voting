import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
 
  apiKey: "AIzaSyDucum30Ms0GqOgs1sLj2vg5yDIABxGBLo",
  authDomain: "voting-d00b8.firebaseapp.com",
  databaseURL: "https://voting-d00b8-default-rtdb.firebaseio.com",
  projectId: "voting-d00b8",
  storageBucket: "voting-d00b8.appspot.com",
  messagingSenderId: "939979967299",
  appId: "1:939979967299:web:812ee776b53b64f5b53df6"
 
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
