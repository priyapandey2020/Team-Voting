import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCR8wr2quVY6Uf8Nb0AAUTLnzgOWpme5Hs",
    authDomain: "p-c67-c1c5e.firebaseapp.com",
    databaseURL: "https://p-c67-c1c5e-default-rtdb.firebaseio.com",
    projectId: "p-c67-c1c5e",
    storageBucket: "p-c67-c1c5e.appspot.com",
    messagingSenderId: "353173345955",
    appId: "1:353173345955:web:a434c0c61e16b85ed29116"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();