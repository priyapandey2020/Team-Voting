import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCTQ4zT_YYh7xJRl2uoKHSMWVBuDZEBIqk",
    authDomain: "voting-app-6567e.firebaseapp.com",
    databaseURL: "https://voting-app-6567e-default-rtdb.firebaseio.com",
    projectId: "voting-app-6567e",
    storageBucket: "voting-app-6567e.appspot.com",
    messagingSenderId: "761525728611",
    appId: "1:761525728611:web:4a1014e01b6f038c7f4f56"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();