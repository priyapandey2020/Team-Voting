import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
apiKey: "AIzaSyAL3Coy7I6DvwtiJx7j_s2QIp2XZVNjMOI",
  authDomain: "voting-app-5e3ef.firebaseapp.com",
  databaseURL: "https://voting-app-5e3ef-default-rtdb.firebaseio.com",
  projectId: "voting-app-5e3ef",
  storageBucket: "voting-app-5e3ef.appspot.com",
  messagingSenderId: "57703950958",
  appId: "1:57703950958:web:1d3357d30516b1ef08547f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
