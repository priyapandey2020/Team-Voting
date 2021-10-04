import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyAQwz8MuNGtZ75wKOErs1jYcANKHtlrmYw",
  authDomain: "teamvoting-c7b11.firebaseapp.com",
  databaseURL: "https://teamvoting-c7b11-default-rtdb.firebaseio.com",
  projectId: "teamvoting-c7b11",
  storageBucket: "teamvoting-c7b11.appspot.com",
  messagingSenderId: "960208285421",
  appId: "1:960208285421:web:d351cfb17eea93ef0366e4"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase.database();
