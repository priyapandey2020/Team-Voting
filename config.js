import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCwXq1FV8N151orYeGIKRSlA7P6Lhl347U",
  authDomain: "team-voting-5fbb8.firebaseapp.com",
  databaseURL: "https://team-voting-5fbb8-default-rtdb.firebaseio.com",
  projectId: "team-voting-5fbb8",
  storageBucket: "team-voting-5fbb8.appspot.com",
  messagingSenderId: "876249878969",
  appId: "1:876249878969:web:c73b1c42433274a160e668"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.database();