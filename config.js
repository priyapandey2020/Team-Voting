import firebase from 'firebase';

// add SDK Firebase

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC8JafyVHn0o3LXu6hG7kxmicGm7G5wO2Q",
    authDomain: "porject-67.firebaseapp.com",
    databaseURL: "https://porject-67-default-rtdb.firebaseio.com",
    projectId: "porject-67",
    storageBucket: "porject-67.appspot.com",
    messagingSenderId: "778729013168",
    appId: "1:778729013168:web:741adbebe6af950ad26075",
    measurementId: "G-6J507L2SHE"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();