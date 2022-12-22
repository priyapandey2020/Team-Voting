import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDHtROZRSZNAJIflIIXLfPEmqFdkoSSYis",
  authDomain: "politics-80c65.firebaseapp.com",
  databaseURL: "https://politics-80c65-default-rtdb.firebaseio.com",
  projectId: "politics-80c65",
  storageBucket: "politics-80c65.appspot.com",
  messagingSenderId: "738735829415",
  appId: "1:738735829415:web:f372e9eaae5465d8628682"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();