import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
 apiKey: "AIzaSyBuIwYyP5NkA_ZDFZjAa_eqASOLxZPK6xw",
  authDomain: "pro58teamvotingappwhjr.firebaseapp.com",
  projectId: "pro58teamvotingappwhjr",
  storageBucket: "pro58teamvotingappwhjr.appspot.com",
  messagingSenderId: "268883680240",
  appId: "1:268883680240:web:f01e7d707ddb537bb39b35"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
