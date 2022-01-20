import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firebaseConfig = {
    apiKey: "AIzaSyDCKDQhsY1doDgDhjCR582bpXQBrZGw62Q",
    authDomain: "project67-57014.firebaseapp.com",
    databaseURL: "https://project67-57014-default-rtdb.firebaseio.com",
    projectId: "project67-57014",
    storageBucket: "project67-57014.appspot.com",
    messagingSenderId: "173354418575",
    appId: "1:173354418575:web:78535eb1e4e70942b74bfa"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
export default firebase.database();