import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDBli82Zky4dA7drrpmN93tqQqECslZ4AM",
    authDomain: "project67-2f025.firebaseapp.com",
    projectId: "project67-2f025",
    storageBucket: "project67-2f025.appspot.com",
    messagingSenderId: "103494167477",
    appId: "1:103494167477:web:4cff58a6c45a8498fd87fc"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();