import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAhBC_8AQB2zhx9uvsBtbVZTbILFIPiwfY",
  authDomain: "pro67-c7acf.firebaseapp.com",
  projectId: "pro67-c7acf",
  storageBucket: "pro67-c7acf.appspot.com",
  messagingSenderId: "470549861495",
  appId: "1:470549861495:web:1227590ea60e1f861a2272"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
