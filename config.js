import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBEcUuZ21x-xeT36STlMzDaJpMiZfZGxEQ",
  authDomain: "teamvotingapp-8dea9.firebaseapp.com",
  databaseURL: "https://teamvotingapp-8dea9-default-rtdb.firebaseio.com",
  projectId: "teamvotingapp-8dea9",
  storageBucket: "teamvotingapp-8dea9.appspot.com",
  messagingSenderId: "753616560905",
  appId: "1:753616560905:web:280694bb8932853901e9d8"
};
// Initialize Firebase
if (!firebase.apps.length) {
firebase.initializeApp(firebaseConfig);
}
export default firebase.database();