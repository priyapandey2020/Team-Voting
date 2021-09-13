import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyC2orDYuno4JC00ZKpgj4A5ftj_P-QLbDQ",
  authDomain: "pro67-ffa93.firebaseapp.com",
  databaseURL: "https://pro67-ffa93-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pro67-ffa93",
  storageBucket: "pro67-ffa93.appspot.com",
  messagingSenderId: "214635859442",
  appId: "1:214635859442:web:7b5b9f4b181b99c3656f6b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
