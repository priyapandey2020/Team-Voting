import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    
      apiKey: "AIzaSyBWJQZTweq97wuL9cbn2pU5JB5lLv2YXlA",
      authDomain: "team-voting-b555c.firebaseapp.com",
      databaseURL: "https://team-voting-b555c-default-rtdb.firebaseio.com",
      projectId: "team-voting-b555c",
      storageBucket: "team-voting-b555c.appspot.com",
      messagingSenderId: "945872912465",
      appId: "1:945872912465:web:a6e4ac218c45e89203f870",
      measurementId: "G-TRH2WWH4R6"
    };
    
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();