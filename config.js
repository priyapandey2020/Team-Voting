import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDTtgeJLnvbL6ogXtzIt1_u6cZr8rwAyvk",
  authDomain: "team-voting-app-c2ed4.firebaseapp.com",
  projectId: "team-voting-app-c2ed4",
  storageBucket: "team-voting-app-c2ed4.appspot.com",
  messagingSenderId: "138128679107",
  appId: "1:138128679107:web:1049b3c0f47b9e51d4c276"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
