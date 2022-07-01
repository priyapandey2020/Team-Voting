import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBhTu-tkGH1sX68WEvbvxRIuun0x53owxg",
  authDomain: "pro-58-3cde1.firebaseapp.com",
  databaseURL: "https://pro-58-3cde1-default-rtdb.firebaseio.com",
  projectId: "pro-58-3cde1",
  storageBucket: "pro-58-3cde1.appspot.com",
  messagingSenderId: "986904965732",
  appId: "1:986904965732:web:f13163cf9cf253232f6571"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();