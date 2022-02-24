import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCOqVQZuuvAVmNZxBxsMx6XXbW1vC2wcLw",
    authDomain: "c67-project-c0435.firebaseapp.com",
    databaseURL: "https://c67-project-c0435-default-rtdb.firebaseio.com",
    projectId: "c67-project-c0435",
    storageBucket: "c67-project-c0435.appspot.com",
    messagingSenderId: "196442167286",
    appId: "1:196442167286:web:8521e467a97049d00bd9d7",
    measurementId: "G-3L23NSZ47D"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();