import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
const firebaseConfig = {
  apiKey: "AIzaSyBWNV_fT5OSd5PQq5eLNSc2z3P0cpOGDyI",
  authDomain: "team-voting-app-27728.firebaseapp.com",
  databaseURL: "https://team-voting-app-27728-default-rtdb.firebaseio.com",
  projectId: "team-voting-app-27728",
  storageBucket: "team-voting-app-27728.appspot.com",
  messagingSenderId: "261253902773",
  appId: "1:261253902773:web:5024790c53424f8227a9fc",
  measurementId: "G-DRVFC8W7DW"
};
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
