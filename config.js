import firebase from "firebase";

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyB66GU5XsV338BATZk8Jys8riBO41AcZ_I",
  authDomain: "p58--team-voting-app.firebaseapp.com",
  databaseURL: "https://p58--team-voting-app-default-rtdb.firebaseio.com",
  projectId: "p58--team-voting-app",
  storageBucket: "p58--team-voting-app.appspot.com",
  messagingSenderId: "998784628007",
  appId: "1:998784628007:web:78cab1129274d2430ea502",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
