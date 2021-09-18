import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyACM1dQHSR6J84g8MY8ERLGG2r9zjBOXKQ",
    authDomain: "teamvotingapp-980b7.firebaseapp.com",
    databaseURL: "https://teamvotingapp-980b7-default-rtdb.firebaseio.com",
    projectId: "teamvotingapp-980b7",
    storageBucket: "teamvotingapp-980b7.appspot.com",
    messagingSenderId: "474124382074",
    appId: "1:474124382074:web:dc42940a13821d091e30c3"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();