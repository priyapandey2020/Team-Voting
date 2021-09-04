import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBJL58iyCyHGNBzuaLUrFCK9jHtEF5iq08",
  authDomain: "voting-app-5aab6.firebaseapp.com",
  databaseURL: "https://voting-app-5aab6-default-rtdb.firebaseio.com",
  projectId: "voting-app-5aab6",
  storageBucket: "voting-app-5aab6.appspot.com",
  messagingSenderId: "483950992163",
  appId: "1:483950992163:web:92642bd5084307170c0a96"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();