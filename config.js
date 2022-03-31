import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDjpufZEmRD7Se5UtY3AAPcPHWHSuUzsDg",
    authDomain: "project-60-74ee7.firebaseapp.com",
    databaseURL: "https://project-60-74ee7-default-rtdb.firebaseio.com",
    projectId: "project-60-74ee7",
    storageBucket: "project-60-74ee7.appspot.com",
    messagingSenderId: "196364668265",
    appId: "1:196364668265:web:e540a5e1e02d8609c541f8"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();