import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAaAv8zrMfXNbbey_lHuxtWRJMZnEN3WHY",
  authDomain: "team-voting-d0dfb.firebaseapp.com",
  databaseURL: "https://team-voting-d0dfb-default-rtdb.firebaseio.com",
  projectId: "team-voting-d0dfb",
  storageBucket: "team-voting-d0dfb.appspot.com",
  messagingSenderId: "940680330387",
  appId: "1:940680330387:web:ea9e5c4f5faf4125bd2166"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();