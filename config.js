import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA95vz5Dj0vmahYzRXHOT5glEWgs89jGPs",
  authDomain: "c67-project-firebase-for-tva.firebaseapp.com",
  projectId: "c67-project-firebase-for-tva",
  storageBucket: "c67-project-firebase-for-tva.appspot.com",
  messagingSenderId: "825808249007",
  appId: "1:825808249007:web:29a5672ae5a6ae4e4c345a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase.database();
