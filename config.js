import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDmTYlD1_uAUMrmcaiKoi-MkFhZRgVu1Hc",
    authDomain: "team-voting-2-96a2b.firebaseapp.com",
    projectId: "team-voting-2-96a2b",
    storageBucket: "team-voting-2-96a2b.appspot.com",
    messagingSenderId: "941365666986",
    appId: "1:941365666986:web:70b9ffcd5bb8b6eed61cd3"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();