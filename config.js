import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAMJlkUSAAHdY433SyrEhcHFAw2U22N4kw",
  authDomain: "open-source-voting.firebaseapp.com",
  databaseURL: "https://open-source-voting-default-rtdb.firebaseio.com",
  projectId: "open-source-voting",
  storageBucket: "open-source-voting.appspot.com",
  messagingSenderId: "631235041769",
  appId: "1:631235041769:web:be25d4881d7d03e81dd378"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();