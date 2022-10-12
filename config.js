import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCEewgBCQheYlpeKvs_UTUBw6cdkYcoqIE",
  authDomain: "team-voting-app-64b04.firebaseapp.com",
  databaseURL: "https://team-voting-app-64b04-default-rtdb.firebaseio.com",
  projectId: "team-voting-app-64b04",
  storageBucket: "team-voting-app-64b04.appspot.com",
  messagingSenderId: "488366872695",
  appId: "1:488366872695:web:0e1aa454a822e5f2148e72",
  measurementId: "G-J3RSFD9MJG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
