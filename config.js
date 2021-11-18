import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: 'AIzaSyB4iHooXlGETbBEmjJl6h_AfMuNJS8kvYM',
  authDomain: 'project-67-fb403.firebaseapp.com',
  databaseURL: 'https://project-67-fb403-default-rtdb.firebaseio.com',
  projectId: 'project-67-fb403',
  storageBucket: 'project-67-fb403.appspot.com',
  messagingSenderId: '63109089369',
  appId: '1:63109089369:web:964955fbf929fb67610948',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
