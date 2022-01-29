import firebase from 'firebase';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUYouHgFEHa82nowkvU9Kf8E1fUe5Xh1Y",
  authDomain: "voting-app-73951.firebaseapp.com",
  databaseURL: "https://voting-app-73951-default-rtdb.firebaseio.com",
  projectId: "voting-app-73951",
  storageBucket: "voting-app-73951.appspot.com",
  messagingSenderId: "843491398855",
  appId: "1:843491398855:web:f3b3cb7c68716710991ae2"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();