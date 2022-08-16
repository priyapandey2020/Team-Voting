import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
        apiKey: "AIzaSyALm0Bdq7MiYmgWSGpIV9b3BdbucKPFSuQ",
        authDomain: "teamvotingapp-dd226.firebaseapp.com",
        projectId: "teamvotingapp-dd226",
        storageBucket: "teamvotingapp-dd226.appspot.com",
        messagingSenderId: "3377028818",
        appId: "1:3377028818:web:e7ddc86cf1552099b3570b"
      };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
