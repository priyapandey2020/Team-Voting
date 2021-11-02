import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBHT9F-2yBWBYlRAkFX17kwW_SXQGXyvyw",
  authDomain: "team-voting-app-c9777.firebaseapp.com",
  databaseURL: "https://team-voting-app-c9777-default-rtdb.firebaseio.com",
  projectId: "team-voting-app-c9777",
  storageBucket: "team-voting-app-c9777.appspot.com",
  messagingSenderId: "337989927933",
  appId: "1:337989927933:web:193942a5ef4c81b070cf94"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();