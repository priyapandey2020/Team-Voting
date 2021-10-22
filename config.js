import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC1Owu0yWEGS7WmiaOZRqmDd3xSpTWi70Q",
    authDomain: "voting-app-9ba73.firebaseapp.com",
    databaseURL: "https://voting-app-9ba73-default-rtdb.firebaseio.com",
    projectId: "voting-app-9ba73",
    storageBucket: "voting-app-9ba73.appspot.com",
    messagingSenderId: "568458097042",
    appId: "1:568458097042:web:dd2829c148f0f49e00d14b"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
export default firebase.database();