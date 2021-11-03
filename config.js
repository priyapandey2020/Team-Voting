import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDbFH8nh_fdOP1Ej37f4H6UKesHv-Aggno",
  authDomain: "team-voting-8f4f1.firebaseapp.com",
  projectId: "team-voting-8f4f1",
  storageBucket: "team-voting-8f4f1.appspot.com",
  messagingSenderId: "282857825201",
  appId: "1:282857825201:web:ce2e7c4d5f39771e90d390"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();