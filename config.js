import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
        apiKey: "AIzaSyA0Lqe_Vr4tpBBHsz8qRi0oUmob8W9b6vI",
        authDomain: "votingapp-5a5ea.firebaseapp.com",
        projectId: "votingapp-5a5ea",
        storageBucket: "votingapp-5a5ea.appspot.com",
        messagingSenderId: "755883498235",
        appId: "1:755883498235:web:b35c60f265baa6b6362e5e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();