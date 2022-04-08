import firebase from 'firebase';

// add SDK Firebase

    var firebaseConfig = {
        apiKey: "AIzaSyDGxdprQV5b9qM1kgJytcKrlrQ0rnE94Q0",
        authDomain: "hot-air-balloon-265b2.firebaseapp.com",
        databaseURL: "https://hot-air-balloon-265b2-default-rtdb.firebaseio.com",
        projectId: "hot-air-balloon-265b2",
        storageBucket: "hot-air-balloon-265b2.appspot.com",
        messagingSenderId: "87617577745",
        appId: "1:87617577745:web:f92d8aec24cee09fd122b0"
      };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();