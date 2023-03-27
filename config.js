import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYJv6R8a_gAldyKLzSiK_Ovm7y-p-i7lE",
    authDomain: "pro-67-3f326.firebaseapp.com",
    projectId: "pro-67-3f326",
    storageBucket: "pro-67-3f326.appspot.com",
    messagingSenderId: "1085382553733",
    appId: "1:1085382553733:web:e5d8c86cdf8ac2f10ef9ec"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
var firebaseConfig = {

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
