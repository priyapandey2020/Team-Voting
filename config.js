import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAnjySYyVM3LXLVK5Gk0IVT7cLKq1xWaj4",
  authDomain: "voting-app-ab543.firebaseapp.com",
  databaseURL: "https://voting-app-ab543-default-rtdb.firebaseio.com",
  projectId: "voting-app-ab543",
  storageBucket: "voting-app-ab543.appspot.com",
  messagingSenderId: "211949790907",
  appId: "1:211949790907:web:3e442df01ece79894a6b9e"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();