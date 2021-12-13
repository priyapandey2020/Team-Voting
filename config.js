import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAEHY5ADsNgS0yJnAcJcbkB13888xQQwzQ",
  authDomain: "team-voting-app-30850.firebaseapp.com",
  databaseURL: "https://team-voting-app-30850-default-rtdb.firebaseio.com",
  projectId: "team-voting-app-30850",
  storageBucket: "team-voting-app-30850.appspot.com",
  messagingSenderId: "934894638533",
  appId: "1:934894638533:web:d19e52ecb713dbbe5527ac",
  measurementId: "G-VNE3DZPKPJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
