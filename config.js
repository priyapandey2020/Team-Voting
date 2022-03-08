import firebase from 'firebase';
const firebaseConfig = {
 apiKey: "AIzaSyDidS873QHocBwKxZKgReuN4kFTuNAF-yA",
  authDomain: "voting-cfbc7.firebaseapp.com",
  databaseURL: "https://voting-cfbc7-default-rtdb.firebaseio.com",
  projectId: "voting-cfbc7",
  storageBucket: "voting-cfbc7.appspot.com",
  messagingSenderId: "977017843660",
  appId: "1:977017843660:web:449e6d720e9fbd37457769"
};
firebase.initializeApp(firebaseConfig);
export default firebase.database()
