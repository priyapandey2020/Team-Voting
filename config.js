import firebase from 'firebase';

// add SDK Firebase
 const firebaseConfig = {
        apiKey: "AIzaSyCezzqd5K_pC24JQ24Jb4MXRQHDQqGCQHw",
        authDomain: "team-voting-ec9e2.firebaseapp.com",
        databaseURL: "https://team-voting-ec9e2-default-rtdb.firebaseio.com",
        projectId: "team-voting-ec9e2",
        storageBucket: "team-voting-ec9e2.appspot.com",
        messagingSenderId: "647144738704",
        appId: "1:647144738704:web:6e6cba89c1039ef682ed15"
      };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
