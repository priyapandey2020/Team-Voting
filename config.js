import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyB7utsOLjAry0aBEGVj3SPKOFSh5hUaEJg",
    authDomain: "team-voting-app-b6a3f.firebaseapp.com",
    databaseURL: "https://team-voting-app-b6a3f-default-rtdb.firebaseio.com",
    projectId: "team-voting-app-b6a3f",
    storageBucket: "team-voting-app-b6a3f.appspot.com",
    messagingSenderId: "71247718554",
    appId: "1:71247718554:web:389e55ec9832aabffb5723"
  };
var firebaseConfig = {

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();