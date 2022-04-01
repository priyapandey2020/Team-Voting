import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyATw34GG-w-m2m17utEQsKMPzu9h0UGPVc",
  authDomain: "voting-c75e5.firebaseapp.com",
  databaseURL: "https://voting-c75e5-default-rtdb.firebaseio.com",
  projectId: "voting-c75e5",
  storageBucket: "voting-c75e5.appspot.com",
  messagingSenderId: "565211912204",
  appId: "1:565211912204:web:3a2c66809686a925477629"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();