import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAoyOAaMoSwhfssskUnkomXr5_Q1I6o3k4",
  authDomain: "classtest-ac1c0.firebaseapp.com",
  projectId: "classtest-ac1c0",
  storageBucket: "classtest-ac1c0.appspot.com",
  messagingSenderId: "544986401326",
  appId: "1:544986401326:web:a1e4a0dd66f93e0c45edbf"
 

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
