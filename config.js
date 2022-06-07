import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
   apiKey: "AIzaSyB3nzUdExrUBhdUBj69warCKHoUXWv2Mug",
  authDomain: "team-voting-app-927bc.firebaseapp.com",
  databaseURL: "https://team-voting-app-927bc-default-rtdb.firebaseio.com",
  projectId: "team-voting-app-927bc",
  storageBucket: "team-voting-app-927bc.appspot.com",
  messagingSenderId: "1091048253454",
  appId: "1:1091048253454:web:2bf871cac81fdaecf9b45f"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
