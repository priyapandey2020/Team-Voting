import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
apiKey: "AIzaSyD56wXNJSjEBIPvu8kaIySAzTtWf0QVemQ",
  authDomain: "voting-app-2-80d48.firebaseapp.com",
  databaseURL: "https://voting-app-2-80d48-default-rtdb.firebaseio.com",
  projectId: "voting-app-2-80d48",
  storageBucket: "voting-app-2-80d48.appspot.com",
  messagingSenderId: "692127730181",
  appId: "1:692127730181:web:7e3149905fbd2294b6aa6c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
