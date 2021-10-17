import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBL_HahW1-ksQVMqXpmHAQORwULd1RrdFo",
    authDomain: "classtest-aaf09.firebaseapp.com",
    databaseURL: "https://classtest-aaf09-default-rtdb.firebaseio.com",
    projectId: "classtest-aaf09",
    storageBucket: "classtest-aaf09.appspot.com",
    messagingSenderId: "18106879487",
    appId: "1:18106879487:web:076b38741ff53d5c452bca"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();