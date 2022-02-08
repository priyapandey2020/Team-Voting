import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
apiKey: "AIzaSyBoQnJp5_Pq5aUyZYvt9vS5wi0EwbQRYcQ",
  authDomain: "c-35-9702b.firebaseapp.com",
  databaseURL: "https://c-35-9702b-default-rtdb.firebaseio.com",
  projectId: "c-35-9702b",
  storageBucket: "c-35-9702b.appspot.com",
  messagingSenderId: "1026090850235",
  appId: "1:1026090850235:web:e86e690af6a6155e26169e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
