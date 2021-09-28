import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
apiKey: "AIzaSyAYa41UlQxWumLsP31d--g69g57y3Bk3AM",
  authDomain: "pro-67-e52e4.firebaseapp.com",
  databaseURL: "https://pro-67-e52e4-default-rtdb.firebaseio.com",
  projectId: "pro-67-e52e4",
  storageBucket: "pro-67-e52e4.appspot.com",
  messagingSenderId: "337384176318",
  appId: "1:337384176318:web:1628fcacb926b916eabcef"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
