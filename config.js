import firebase from "firebase";

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBCPBozXPxtzk_7MeNsv8TllCebk8M_fdU",
  authDomain: "team-voting-e8e5c.firebaseapp.com",
  projectId: "team-voting-e8e5c",
  storageBucket: "team-voting-e8e5c.appspot.com",
  messagingSenderId: "58758549740",
  appId: "1:58758549740:web:008dd97ec4ab069cddd5c9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
