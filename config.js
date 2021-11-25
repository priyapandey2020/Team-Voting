import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyASnMPNLWuCOrnvs-kBC5xR3oRQdot79-E",
    authDomain: "team-voting-app-ad965.firebaseapp.com",
    projectId: "team-voting-app-ad965",
    storageBucket: "team-voting-app-ad965.appspot.com",
    messagingSenderId: "267366948970",
    appId: "1:267366948970:web:b2fb5eb0e5a86cb08d2a13"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();