import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAv_a-apB6z9bQmiEoPAh9v2ioBpf1j9D8",
    authDomain: "team-voting-8b551.firebaseapp.com",
    databaseURL: "https://team-voting-8b551-default-rtdb.firebaseio.com",
    projectId: "team-voting-8b551",
    storageBucket: "team-voting-8b551.appspot.com",
    messagingSenderId: "806270869381",
    appId: "1:806270869381:web:d676c6379f20cdb0316eec"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
