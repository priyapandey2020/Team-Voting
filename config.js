import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB1HUY3MFKxfsxC8m4Yxgbvxevq66cVQVA",
    authDomain: "ffffffffffffffffffffffff-7c6ea.firebaseapp.com",
    databaseURL: "https://ffffffffffffffffffffffff-7c6ea-default-rtdb.firebaseio.com",
    projectId: "ffffffffffffffffffffffff-7c6ea",
    storageBucket: "ffffffffffffffffffffffff-7c6ea.appspot.com",
    messagingSenderId: "341526376475",
    appId: "1:341526376475:web:17b067a740afff278c48be"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();