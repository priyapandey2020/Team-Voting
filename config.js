import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBsrHILLGx2hDLC02-1AdumLO0eD8bs424",
  authDomain: "voting-app-aa21a.firebaseapp.com",
  databaseURL: "https://voting-app-aa21a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "voting-app-aa21a",
  storageBucket: "voting-app-aa21a.appspot.com",
  messagingSenderId: "86546527380",
  appId: "1:86546527380:web:fddc0932dc7a9233267081"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
