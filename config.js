import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDBNxKQ1yspaJNHp18zIpEuZ2p281Qbdhc",
  authDomain: "voting-app-4c073.firebaseapp.com",
  databaseURL: "https://voting-app-4c073-default-rtdb.firebaseio.com",
  projectId: "voting-app-4c073",
  storageBucket: "voting-app-4c073.appspot.com",
  messagingSenderId: "234272989409",
  appId: "1:234272989409:web:4c666b350916e344eb97a0",
  measurementId: "G-J0YV515SYJ"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();