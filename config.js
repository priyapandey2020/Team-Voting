import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBTENrrUnPjQzdx4QLxeitVNPtdRZOqGLk",
  authDomain: "votingapp-31c8e.firebaseapp.com",
  databaseURL: "https://votingapp-31c8e-default-rtdb.firebaseio.com",
  projectId: "votingapp-31c8e",
  storageBucket: "votingapp-31c8e.appspot.com",
  messagingSenderId: "508794278366",
  appId: "1:508794278366:web:235bc4dea19ed106a28d4f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
