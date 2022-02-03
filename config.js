import firebase from 'firebase';

// add SDK Firebase

    var firebaseConfig = {
        apiKey: "AIzaSyCkYSxLea9K9X6fxFhN6sU2Rkwk5ZpIlzg",
        authDomain: "team-voting-app-d7748.firebaseapp.com",
        projectId: "team-voting-app-d7748",
        storageBucket: "team-voting-app-d7748.appspot.com",
        messagingSenderId: "58758181642",
        appId: "1:58758181642:web:aa0281cef073dc970fc0f3"
      };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();