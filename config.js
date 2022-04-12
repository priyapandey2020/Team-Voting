import firebase from 'firebase';

// add SDK Firebase

    const firebaseConfig = {
        apiKey: "AIzaSyAhBJgu174aj3n6IO1QoVQVSjfOZMqR8ok",
        authDomain: "class-voting-app-8fc44.firebaseapp.com",
        databaseURL: "https://class-voting-app-8fc44-default-rtdb.firebaseio.com",
        projectId: "class-voting-app-8fc44",
        storageBucket: "class-voting-app-8fc44.appspot.com",
        messagingSenderId: "895635198904",
        appId: "1:895635198904:web:e9cedaecfbcdefed9bf54d"
      };
    

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    

export default firebase.database();