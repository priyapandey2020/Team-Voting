import firebase from 'firebase';

// add SDK Firebase

const firebaseConfig = {
  apiKey: "AIzaSyCnoVMFgiBUGbEjDmD1iZfIM35HFAPrRxo",
  authDomain: "pro67-83f83.firebaseapp.com",
  databaseURL: "https://pro67-83f83-default-rtdb.firebaseio.com",
  projectId: "pro67-83f83",
  storageBucket: "pro67-83f83.appspot.com",
  messagingSenderId: "444395565822",
  appId: "1:444395565822:web:da6a49b4c26ccb77426baf"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();