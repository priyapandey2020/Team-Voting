import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDfMVJN02a6Vo37v6OiBEIvpLI-5Z2ndas",
  authDomain: "c67-home-project-465cc.firebaseapp.com",
  databaseURL: "https://c67-home-project-465cc-default-rtdb.firebaseio.com",
  projectId: "c67-home-project-465cc",
  storageBucket: "c67-home-project-465cc.appspot.com",
  messagingSenderId: "570453262394",
  appId: "1:570453262394:web:670e06d92d2c041f0f3503"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();