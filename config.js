import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBQl248Ul16kCRY9ixlK_VipgeUACJ1HOw",
  authDomain: "team-voting-8f125.firebaseapp.com",
  projectId: "team-voting-8f125",
  storageBucket: "team-voting-8f125.appspot.com",
  messagingSenderId: "395012685638",
  appId: "1:395012685638:web:fdcace81e273e22a85af47",
  measurementId: "G-HNPJKR2WVH",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();