import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAL9ACFGBKKvE7XkKf-2pUIikmCJ39c9gg",
    authDomain: "team-vo-in-app.firebaseapp.com",
    projectId: "team-vo-in-app",
    storageBucket: "team-vo-in-app.appspot.com",
    messagingSenderId: "182379433388",
    appId: "1:182379433388:web:3812a8b8e8d11cd479be09"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
