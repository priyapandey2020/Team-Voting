import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {

  apiKey: "AIzaSyDEWm99QiSCgNQ6_P1KGmKKxPSwWFM_dA0",
  authDomain: "voting-bc731.firebaseapp.com",
  projectId: "voting-bc731",
  databaseURL:"https://voting-bc731-default-rtdb.firebaseio.com",
  storageBucket: "voting-bc731.appspot.com",
  messagingSenderId: "834328435502",
  appId: "1:834328435502:web:61e0490b6e2d68f4d9b8bf"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
