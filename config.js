import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
   
  apiKey: "AIzaSyDR6m9h47Z1UWGBwIJ62mRml9WtWAxBCoY",
  authDomain: "team-voting-cf089.firebaseapp.com",
  databaseURL: "https://team-voting-cf089-default-rtdb.firebaseio.com",
  projectId: "team-voting-cf089",
  storageBucket: "team-voting-cf089.appspot.com",
  messagingSenderId: "372187838554",
  appId: "1:372187838554:web:b03553b8ea4f8f7a968063"

// Initialize Firebase
    
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
