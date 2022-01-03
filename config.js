import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCSz2Sj2Glqh6oQoXSbKWpOBU5_Dp8P8XM",
    authDomain: "project-47-c7fa3.firebaseapp.com",
    databaseURL: "https://project-47-c7fa3-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "project-47-c7fa3",
    storageBucket: "project-47-c7fa3.appspot.com",
    messagingSenderId: "534944512684",
    appId: "1:534944512684:web:37c215eba6aaa9b1457d09"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.database();