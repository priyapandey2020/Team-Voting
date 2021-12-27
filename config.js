import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyA2ARDNnYRpjy7G6_HoN21AZYlCK07b2HU",
  authDomain: "team-voting-app-d5a30.firebaseapp.com",
  projectId: "team-voting-app-d5a30",
  storageBucket: "team-voting-app-d5a30.appspot.com",
  messagingSenderId: "752508181346",
  appId: "1:752508181346:web:7b7cc64e6b20d81741aa3b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
