import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: 'AIzaSyCU-lFwhNowHSKXJsiIAvbtslPRNfcursU',
  authDomain: 'project-58-team-voting.firebaseapp.com',
  databaseURL: 'https://project-58-team-voting-default-rtdb.firebaseio.com',
  projectId: 'project-58-team-voting',
  storageBucket: 'project-58-team-voting.appspot.com',
  messagingSenderId: '1086550449875',
  appId: '1:1086550449875:web:8b2c68ed9256594fd23e26',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();