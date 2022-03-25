import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDPx1vpLoDLZuxbzGzMC2LtFvxjAEyGkOc",
    authDomain: "pro---67.firebaseapp.com",
    projectId: "pro---67",
    storageBucket: "pro---67.appspot.com",
    messagingSenderId: "505303808334",
    appId: "1:505303808334:web:95a8f21ee4e8041a4f461f"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();