import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCk61dWjkWsn2gEafA4sb_SFcGO2t4M3gU",
    authDomain: "project-c-67-team-voting.firebaseapp.com",
    projectId: "project-c-67-team-voting",
    storageBucket: "project-c-67-team-voting.appspot.com",
    messagingSenderId: "177831460711",
    appId: "1:177831460711:web:904c9b6d5ac6ee5fb3b9c2"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();