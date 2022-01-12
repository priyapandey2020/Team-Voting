import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {

  apiKey: "AIzaSyDBXAq4rMmw_Y_4xdUikMZvhq_PfA3deBI",
  authDomain: "voting-app-265d4.firebaseapp.com",
  databaseURL: "https://voting-app-265d4-default-rtdb.firebaseio.com",
  projectId: "voting-app-265d4",
  storageBucket: "voting-app-265d4.appspot.com",
  messagingSenderId: "499501172413",
  appId: "1:499501172413:web:fda5e56b5cea31ea6259d4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
