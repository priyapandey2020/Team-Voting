import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA0-3Yr33OvM9ZPZbs7bGdOHye0Ek-ucqU",
  authDomain: "pro67-e6609.firebaseapp.com",
  projectId: "pro67-e6609",
  storageBucket: "pro67-e6609.appspot.com",
  messagingSenderId: "960865846464",
  appId: "1:960865846464:web:2778545df7e635c64ed925"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
