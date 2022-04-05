import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAdE_SNCPPB0u-miCOMOGNKiVKdh2ncTIU",
  authDomain: "votingapp-fb9ce.firebaseapp.com",
  databaseURL: "https://votingapp-fb9ce-default-rtdb.firebaseio.com",
  projectId: "votingapp-fb9ce",
  storageBucket: "votingapp-fb9ce.appspot.com",
  messagingSenderId: "927103410984",
  appId: "1:927103410984:web:6aaa8bc329a93ae545e61d",
  measurementId: "G-DSF5RGN20H"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
