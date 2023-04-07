import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyC0vlwCwV36LQSJWUa6Gcp9Qw9rOROx7XQ",
  authDomain: "voting-47898.firebaseapp.com",
  databaseURL: "https://voting-47898-default-rtdb.firebaseio.com",
  projectId: "voting-47898",
  storageBucket: "voting-47898.appspot.com",
  messagingSenderId: "701366361089",
  appId: "1:701366361089:web:1389a71e14553f5b38b400"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();