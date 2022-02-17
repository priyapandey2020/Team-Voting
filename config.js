import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDXK9z9FRcLfYqcUwHScFIBKPUnPAEud7o",
  authDomain: "voters-117f5.firebaseapp.com",
  databaseURL: "https://voters-117f5-default-rtdb.firebaseio.com",
  projectId: "voters-117f5",
  storageBucket: "voters-117f5.appspot.com",
  messagingSenderId: "404093287980",
  appId: "1:404093287980:web:a3e6d3ec8a676c0c1a9b89"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
