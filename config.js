import firebase from 'firebase';

// add SDK Firebase
const  firebaseConfig = {
    apiKey: "AIzaSyC9soYBCogz1HT5OoW8Id0vtDasHrzc5ik",
    authDomain: "votting-app-a14e7.firebaseapp.com",
    databaseURL: "https://votting-app-a14e7-default-rtdb.firebaseio.com",
    projectId: "votting-app-a14e7",
    storageBucket: "votting-app-a14e7.appspot.com",
    messagingSenderId: "362448427394",
    appId: "1:362448427394:web:81a43f916e4db9a0f5d79b"
  }
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();