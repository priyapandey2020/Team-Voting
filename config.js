import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {

    apiKey: "AIzaSyD652HxeWQzTCjJw-ALCwZ398CUTM4O1rI",
  
    authDomain: "team-voting-40a8d.firebaseapp.com",
  
    projectId: "team-voting-40a8d",
  
    storageBucket: "team-voting-40a8d.appspot.com",
  
    messagingSenderId: "137932668880",
  
    appId: "1:137932668880:web:a301290d7cd8a4195083d5"
  
  };
  
  
  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig);

export default firebase.database();