import firebase from 'firebase';

// add SDK Firebase

var firebaseConfig = {
 apiKey: "AIzaSyClHrBf_FXEE3QQxIDzLqyCMJAG5SEGxyc",
  authDomain: "voting-app-248ba.firebaseapp.com",
  projectId: "voting-app-248ba",
  storageBucket: "voting-app-248ba.appspot.com",
  messagingSenderId: "33828832171",
  appId: "1:33828832171:web:4e9177aa2abe361d1548ee"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
