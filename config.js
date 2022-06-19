import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyA0byjIh2daySYUhlv-iUQcYNcRAOR1MFw",
  authDomain: "project67-8e6b4.firebaseapp.com",
  projectId: "project67-8e6b4",
  storageBucket: "project67-8e6b4.appspot.com",
  messagingSenderId: "62849005148",
  appId: "1:62849005148:web:87c2ca44f22c7a04299899"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();