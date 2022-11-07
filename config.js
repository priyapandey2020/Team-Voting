import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyD8TjPVV6jIEnKgZFcYryAumbt6IDWtD68",
  authDomain: "teamvoting-6a072.firebaseapp.com",
  databaseURL: "https://teamvoting-6a072-default-rtdb.firebaseio.com",
  projectId: "teamvoting-6a072",
  storageBucket: "teamvoting-6a072.appspot.com",
  messagingSenderId: "406141662551",
  appId: "1:406141662551:web:42e7667af2bb983c8bfa12"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
