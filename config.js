import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyB-Yv06ym0lp-RFcx8OXrzbO7mUtz5UM7U",
  authDomain: "voting-app-e3520.firebaseapp.com",
  databaseURL: "https://voting-app-e3520-default-rtdb.firebaseio.com",
  projectId: "voting-app-e3520",
  storageBucket: "voting-app-e3520.appspot.com",
  messagingSenderId: "564100530136",
  appId: "1:564100530136:web:c9e861711b24db617a3cad"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();