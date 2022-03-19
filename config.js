import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBviidBCTFlv9x5OQvhBkY8Dk_8W9lal08",
    authDomain: "project-67-c596f.firebaseapp.com",
    databaseURL: "https://project-67-c596f-default-rtdb.firebaseio.com",
    projectId: "project-67-c596f",
    storageBucket: "project-67-c596f.appspot.com",
    messagingSenderId: "997618404009",
    appId: "1:997618404009:web:4519228ee55caf9cb8f7b8"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();