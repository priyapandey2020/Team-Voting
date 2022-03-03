import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
apiKey: "AIzaSyA9AERT9gZsHtKm0yY2oS0YGchSfmlnf88",
  authDomain: "team-voting-app-2.firebaseapp.com",
  databaseURL: "https://team-voting-app-2-default-rtdb.firebaseio.com",
  projectId: "team-voting-app-2",
  storageBucket: "team-voting-app-2.appspot.com",
  messagingSenderId: "932448459815",
  appId: "1:932448459815:web:a18e53e35ea36dcbc48202"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
