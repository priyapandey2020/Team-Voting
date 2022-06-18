import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
        apiKey: "AIzaSyA3fVmsBu_-vfRTciNVxQtNrUx2xUjJ0-U",
        authDomain: "classtest-23043.firebaseapp.com",
        projectId: "classtest-23043",
        storageBucket: "classtest-23043.appspot.com",
        messagingSenderId: "678456405430",
        appId: "1:678456405430:web:9fd9c0d7216f0339fee517"
      };

 ;
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();