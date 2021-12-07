import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD9eAp1y3VbndDc8XvgQ0dP886H_FrbMlE",
    authDomain: "voting-team-app.firebaseapp.com",
    projectId: "voting-team-app",
    storageBucket: "voting-team-app.appspot.com",
    messagingSenderId: "18622511571",
    appId: "1:18622511571:web:4917ac5fa9e8780b9e5726",
    measurementId: "G-03EQWZ25FG"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

export default firebase.database();