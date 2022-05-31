import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAzITJTNfST8KfXkluPzLIdTT6EthRGzXA",
  authDomain: "teamvoting-bcb15.firebaseapp.com",
  projectId: "teamvoting-bcb15",
  storageBucket: "teamvoting-bcb15.appspot.com",
  messagingSenderId: "122837969045",
  appId: "1:122837969045:web:ab606f8ab8967c16ec539c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();