import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDjhGtMp7-h1fL__a6iZrLQQiHsjKF2Rt0",
  authDomain: "open-source-project-659c5.firebaseapp.com",
  projectId: "open-source-project-659c5",
  storageBucket: "open-source-project-659c5.appspot.com",
  messagingSenderId: "93147495577",
  appId: "1:93147495577:web:4fcd090adfbe888008cc08"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
