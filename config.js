import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDqJGcTrWpo4UFvK3haQAk80hO3B1zOHgY",
  authDomain: "project67--team-voting.firebaseapp.com",
  databaseURL: "https://project67--team-voting-default-rtdb.firebaseio.com",
  projectId: "project67--team-voting",
  storageBucket: "project67--team-voting.appspot.com",
  messagingSenderId: "707072988104",
  appId: "1:707072988104:web:8693b7c7e3827005f166fd"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();