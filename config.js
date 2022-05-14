import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyCDQJDcK_VT45MSeuqlQLcfFxosyQtiaYI",
  authDomain: "voting-79bdd.firebaseapp.com",
  databaseURL: "https://voting-79bdd-default-rtdb.firebaseio.com",
  projectId: "voting-79bdd",
  storageBucket: "voting-79bdd.appspot.com",
  messagingSenderId: "632176915283",
  appId: "1:632176915283:web:c3a552de6979018bd1e7a6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
