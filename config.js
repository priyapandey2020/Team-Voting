import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAk8vSNUXwvm0E6pgRZyxTGIPswmrmP53E",
    authDomain: "class-test-deffe.firebaseapp.com",
    projectId: "class-test-deffe",
    storageBucket: "class-test-deffe.appspot.com",
    messagingSenderId: "1050827094130",
    appId: "1:1050827094130:web:832061447da2fec26beaeb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();