import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAslbS1WaPxebprBVbvrJqlKcSCVGk_S4M",
    authDomain: "project-67-6312a.firebaseapp.com",
    databaseURL: "https://project-67-6312a-default-rtdb.firebaseio.com",
    projectId: "project-67-6312a",
    storageBucket: "project-67-6312a.appspot.com",
    messagingSenderId: "372374106879",
    appId: "1:372374106879:web:856c3f9d7e14c23de852ca"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();