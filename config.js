import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBqlkLhIlP_YHy4xav13YmJ_n2uURwdymA",
  authDomain: "project67-f328e.firebaseapp.com",
  databaseURL: "https://project67-f328e-default-rtdb.firebaseio.com",
  projectId: "project67-f328e",
  storageBucket: "project67-f328e.appspot.com",
  messagingSenderId: "701139285569",
  appId: "1:701139285569:web:1ce050cd9894ead96838c0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
