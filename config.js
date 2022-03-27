import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIW1-3JsTyraeoqZeFwpWb8JXLpH_HZ-w",
    authDomain: "team-voting-f8618.firebaseapp.com",
    projectId: "team-voting-f8618",
    storageBucket: "team-voting-f8618.appspot.com",
    messagingSenderId: "962297295735",
    appId: "1:962297295735:web:ce030342a6a35ba8372772"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

export default firebase.database();