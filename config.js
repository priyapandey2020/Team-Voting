import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCFF6VbSMZFcA3uVN2wNQo8wbgTXR3e7s8",
  authDomain: "votingapp-622ec.firebaseapp.com",
  databaseURL: "https://votingapp-622ec-default-rtdb.firebaseio.com",
  projectId: "votingapp-622ec",
  storageBucket: "votingapp-622ec.appspot.com",
  messagingSenderId: "25166032064",
  appId: "1:25166032064:web:4477011de47e8ee82a5125"
};

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase.database();