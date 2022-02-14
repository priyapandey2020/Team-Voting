import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAQlqt7Oi5TxpRmeDY4Y-GsMq_3Iy4_0gg",
    authDomain: "pro67-53dae.firebaseapp.com",
    projectId: "pro67-53dae",
    storageBucket: "pro67-53dae.appspot.com",
    messagingSenderId: "236803941255",
    appId: "1:236803941255:web:db201a967ab6b3d82de922"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.database();
