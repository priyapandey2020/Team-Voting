import firebase from 'firebase';

// add SDK Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3JhtnINVXv2hcsnUnqSEOSOPtmfW7GXc",
    authDomain: "team-vooting-app.firebaseapp.com",
    databaseURL: "https://team-vooting-app-default-rtdb.firebaseio.com",
    projectId: "team-vooting-app",
    storageBucket: "team-vooting-app.appspot.com",
    messagingSenderId: "217693981055",
    appId: "1:217693981055:web:10db2997227bd2e9edb24a",
    measurementId: "G-09Z337897F"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();