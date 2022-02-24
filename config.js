import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDTIS67MLX--dfUWIjnNCZw9Z-5wWXxVKc",
  authDomain: "project-67-e3229.firebaseapp.com",
  databaseURL: "https://project-67-e3229-default-rtdb.firebaseio.com",
  projectId: "project-67-e3229",
  storageBucket: "project-67-e3229.appspot.com",
  messagingSenderId: "1082435952151",
  appId: "1:1082435952151:web:d2afd4b36c58eeb676c652"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
