import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
// Your web app's Firebase configuration
    apiKey: "AIzaSyCzsLPbZih-g2XokkZiwLsdWFgli6qK8Ew",
    authDomain: "classtest-c7a8b.firebaseapp.com",
    projectId: "classtest-c7a8b",
    storageBucket: "classtest-c7a8b.appspot.com",
    messagingSenderId: "662844589879",
    appId: "1:662844589879:web:68456dc8cfb9e919803cb2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();