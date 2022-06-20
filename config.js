import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB5nBhRu3Otw7CaugBiWBRb5ocBwsFmF84",
    authDomain: "voting-29f9b.firebaseapp.com",
    databaseURL: "https://voting-29f9b-default-rtdb.firebaseio.com",
    projectId: "voting-29f9b",
    storageBucket: "voting-29f9b.appspot.com",
    messagingSenderId: "945146252121",
    appId: "1:945146252121:web:ac4dd3e214661568a75a48"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
