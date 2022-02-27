import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD0cdTdEE7sNJVmR9dUAhUraV4oPDp6h8k",
    authDomain: "team-voting-app-8e1fc.firebaseapp.com",
    databaseURL: "https://team-voting-app-8e1fc-default-rtdb.firebaseio.com",
    projectId: "team-voting-app-8e1fc",
    storageBucket: "team-voting-app-8e1fc.appspot.com",
    messagingSenderId: "158675149621",
    appId: "1:158675149621:web:8deaa59d78c579b39a227c"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();