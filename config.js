import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyCkDFL8CUpYJWjULev5veLTAsE39AjKuzA", 
  authDomain: "pro67-d6bd7.firebaseapp.com",
  projectId: "pro67-d6bd7",
  storageBucket: "pro67-d6bd7.appspot.com",
  messagingSenderId: "1042102362139",
  appId: "1:1042102362139:web:0a4f0ff42cf162461858be"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
