import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBBrTdfea0rBpBhZ7P5NySdN642pXdxjQM",
  authDomain: "team-voting-app-b7ec6.firebaseapp.com",
  projectId: "team-voting-app-b7ec6",
  storageBucket: "team-voting-app-b7ec6.appspot.com",
  messagingSenderId: "23347487768",
  appId: "1:23347487768:web:dd04032ec04d458fc38f6d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
