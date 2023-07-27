import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDgZMUgMWjDDeViygoL7uOs5FAkL-jMrqc",
  authDomain: "quirk-82f4d.firebaseapp.com",
  databaseURL: "https://quirk-82f4d-default-rtdb.firebaseio.com",
  projectId: "quirk-82f4d",
  storageBucket: "quirk-82f4d.appspot.com",
  messagingSenderId: "548186476315",
  appId: "1:548186476315:web:f33ece6a0ba75769decdbe"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();