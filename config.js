import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBlRlWqHcYQYbP1E9_C11LsnqK_XbQXHHs",
    authDomain: "team-voting-e841c.firebaseapp.com",
    projectId: "team-voting-e841c",
    storageBucket: "team-voting-e841c.appspot.com",
    messagingSenderId: "572008435159",
    appId: "1:572008435159:web:b8a47c8b8ae8c34ea40f92"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();