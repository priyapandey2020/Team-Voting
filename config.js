import firebase from 'firebase';

// add SDK Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGQ-yIEbvM0XWVeOa9cGjNR4Pfvt2i-IA",
  authDomain: "votingapp-2469e.firebaseapp.com",
  projectId: "votingapp-2469e",
  storageBucket: "votingapp-2469e.appspot.com",
  messagingSenderId: "1052513940722",
  appId: "1:1052513940722:web:daa3c7fb8f0fc36d12cc6b",
  measurementId: "G-9GL12HHSE1"
};
var firebaseConfig = {

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
