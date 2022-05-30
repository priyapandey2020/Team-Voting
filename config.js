import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {

  apiKey: "AIzaSyCGMrWxYFcphJjqx4uQ61v0Cci1sVgF28k",
  authDomain: "p-67-b3982.firebaseapp.com",
  projectId: "p-67-b3982",
  storageBucket: "p-67-b3982.appspot.com",
  messagingSenderId: "330415106249",
  appId: "1:330415106249:web:516bb0f6f1ace5dda78518",
  measurementId: "G-3KY581KT60"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();