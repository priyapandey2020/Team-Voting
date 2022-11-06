import firebase from 'firebase';

// add SDK Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDusAgHHFmjuz9KFmxm6GtdRlHMA7dfVpw",
    authDomain: "team-voting-app-2b01d.firebaseapp.com",
    databaseURL: "https://team-voting-app-2b01d-default-rtdb.firebaseio.com",
    projectId: "team-voting-app-2b01d",
    storageBucket: "team-voting-app-2b01d.appspot.com",
    messagingSenderId: "83657453409",
    appId: "1:83657453409:web:8c0c16d406169555385f20",
    measurementId: "G-Y69CS0R1VE"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();