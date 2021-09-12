import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBU7nseSVr2eSr5swZYCVR2qcqys3x5i8c",
    authDomain: "team-voting-da9c9.firebaseapp.com",
    projectId: "team-voting-da9c9",
    storageBucket: "team-voting-da9c9.appspot.com",
    messagingSenderId: "1046037497581",
    appId: "1:1046037497581:web:3ac38b9afa33599b0d2ee4"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();