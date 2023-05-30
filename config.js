import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA5vZNv1DbanrI_TXyUv2AoVPUDinGZu7k",
  authDomain: "c-58-b9b96.firebaseapp.com",
  databaseURL: "https://c-58-b9b96-default-rtdb.firebaseio.com",
  projectId: "c-58-b9b96",
  storageBucket: "c-58-b9b96.appspot.com",
  messagingSenderId: "811380392095",
  appId: "1:811380392095:web:ab41d012f2c58b0703e2aa"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
