import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBQ6i0io3tpe9VDqeSivFFlxM4EKO577GM",
  authDomain: "voting-app-d168c.firebaseapp.com",
  projectId: "voting-app-d168c",
  storageBucket: "voting-app-d168c.appspot.com",
  messagingSenderId: "443830077455",
  appId: "1:443830077455:web:d85ac811cead08c6ce7b7a"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
