import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyCN1E40Ljwp4avIZeYXAQQud8iv-PvzNdQ",
  authDomain: "team-voting-c310e.firebaseapp.com",
  databaseURL: "https://team-voting-c310e-default-rtdb.firebaseio.com",
  projectId: "team-voting-c310e",
  storageBucket: "team-voting-c310e.appspot.com",
  messagingSenderId: "692997820503",
  appId: "1:692997820503:web:89f289ed12e6f447905312"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();