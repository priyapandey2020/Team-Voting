import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDf8cVX15u_TfmBYFjfn0xuXx4PhymRWqU",
    authDomain: "voting-app-16c28.firebaseapp.com",
    databaseURL: "https://voting-app-16c28-default-rtdb.firebaseio.com",
    projectId: "voting-app-16c28",
    storageBucket: "voting-app-16c28.appspot.com",
    messagingSenderId: "56478066023",
    appId: "1:56478066023:web:c971bdb4be41e091e3bbc2"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();