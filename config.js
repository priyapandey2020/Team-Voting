import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDVn5_UrLIRf9DwpbUnbeSRZURwszWDM7U",
    authDomain: "team-voting-app-87b01.firebaseapp.com",
    databaseURL: "https://team-voting-app-87b01-default-rtdb.firebaseio.com",
    projectId: "team-voting-app-87b01",
    storageBucket: "team-voting-app-87b01.appspot.com",
    messagingSenderId: "942762133419",
    appId: "1:942762133419:web:0998ab60c0d1d03ba634ee"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();