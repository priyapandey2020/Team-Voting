import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBzJqXjQKg6RNPRKAmdbPbVUY22JGknIyo",
  authDomain: "project-67-open-source.firebaseapp.com",
  databaseURL: "https://project-67-open-source-default-rtdb.firebaseio.com",
  projectId: "project-67-open-source",
  storageBucket: "project-67-open-source.appspot.com",
  messagingSenderId: "1093836816539",
  appId: "1:1093836816539:web:27cd929c108323435e463e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();