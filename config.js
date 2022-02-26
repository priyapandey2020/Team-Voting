import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCf_kN99UqLm9fLKpdJqNg3wBsmDpbIgto",
    authDomain: "dumb-5678a.firebaseapp.com",
    projectId: "dumb-5678a",
    storageBucket: "dumb-5678a.appspot.com",
    messagingSenderId: "369128489723",
    appId: "1:369128489723:web:854526943415180364a65e",
    measurementId: "G-1XBL1VN4PC"
};
// Initialize Firebase
let app= firebase.initializeApp(firebaseConfig);

export default firebase.database();