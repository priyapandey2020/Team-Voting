import firebase from 'firebase';

// add SDK Firebase
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDSVNoUTa6nYCm7KgYEWsiLGF5JsbmujWo",
    authDomain: "vote-app-7250c.firebaseapp.com",
    projectId: "vote-app-7250c",
    storageBucket: "vote-app-7250c.appspot.com",
    messagingSenderId: "252624332586",
    appId: "1:252624332586:web:dfa502b1c76d320d49a053"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.database();