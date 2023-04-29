import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAB0oWh3E31cg5G-Q3A81oCMDfuh2AoAOw",
  authDomain: "c-58-project-310ca.firebaseapp.com",
  databaseURL: "https://c-58-project-310ca-default-rtdb.firebaseio.com",
  projectId: "c-58-project-310ca",
  storageBucket: "c-58-project-310ca.appspot.com",
  messagingSenderId: "915632055917",
  appId: "1:915632055917:web:618406db56e51f470f4164"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
