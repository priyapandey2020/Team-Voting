import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = { apiKey: "AIzaSyDvWfzNEful_Lvvxz9H1U7rJAIv8jftwbU",
  authDomain: "pro-c67-dfe93.firebaseapp.com",
  databaseURL: "https://pro-c67-dfe93-default-rtdb.firebaseio.com",
  projectId: "pro-c67-dfe93",
  storageBucket: "pro-c67-dfe93.appspot.com",
  messagingSenderId: "686772812794",
  appId: "1:686772812794:web:7b6ad94bb75488eecb8243",
  measurementId: "G-5R2D7H638E"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
