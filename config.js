import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB2uklnhHOszvqSCLlO2k-o87_wq3Wa2OE",
    authDomain: "class-58jno.firebaseapp.com",
    databaseURL: "https://class-58jno-default-rtdb.firebaseio.com",
    projectId: "class-58jno",
    storageBucket: "class-58jno.appspot.com",
    messagingSenderId: "528837858091",
    appId: "1:528837858091:web:afcc75095ecefac88c2b6e"
  };
// Initialize Firebase
if(!firebase.apps.length)
firebase.initializeApp(firebaseConfig);

export default firebase.database();