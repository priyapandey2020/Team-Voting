import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBdJcNNUDPFbNV1JP00IkVQ8blxFEZ2jFM",
    authDomain: "c67-pro.firebaseapp.com",
    projectId: "c67-pro",
    storageBucket: "c67-pro.appspot.com",
    messagingSenderId: "414385723810",
    appId: "1:414385723810:web:3727f19a72899eabcd7afb",
    measurementId: "G-DPPKPWJ8VM"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();