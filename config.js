import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBdjO-N6rNqXSwUxAX_6N0ZfAOnA3WIMtc",
    authDomain: "pro-67-ed00b.firebaseapp.com",
    databaseURL: "https://pro-67-ed00b-default-rtdb.firebaseio.com",
    projectId: "pro-67-ed00b",
    storageBucket: "pro-67-ed00b.appspot.com",
    messagingSenderId: "593844302601",
    appId: "1:593844302601:web:dee098639924ca05a3d9d8"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();