import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyABPMHwd0Z3pY4M6oFEnaczaH2NbgvuFSE",

    authDomain: "team-voting-18c88.firebaseapp.com",
  
    databaseURL: "https://team-voting-18c88-default-rtdb.firebaseio.com",
  
    projectId: "team-voting-18c88",
  
    storageBucket: "team-voting-18c88.appspot.com",
  
    messagingSenderId: "50870742930",
  
    appId: "1:50870742930:web:27dd46caaa1ccadbf7db4b"
  
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();