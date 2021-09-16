import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-K3cqp3GXsvVZShhLv9KxLfhcD2Wwrag",
    authDomain: "test-30c35.firebaseapp.com",
    projectId: "test-30c35",
    storageBucket: "test-30c35.appspot.com",
    messagingSenderId: "399949735956",
    appId: "1:399949735956:web:3db56a7f831713513e1f01"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();