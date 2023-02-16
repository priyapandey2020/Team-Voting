import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDOgAttJ4L4srCT8doCNENDg8TySUhFm6M",
  authDomain: "team-voting-36132.firebaseapp.com",
  projectId: "team-voting-36132",
  storageBucket: "team-voting-36132.appspot.com",
  messagingSenderId: "20785819961",
  appId: "1:20785819961:web:bcc0ebb62793d7e3a178e8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
