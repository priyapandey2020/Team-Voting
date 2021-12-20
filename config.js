import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAslh13O0xwjZGp2HL6eQ9eB52NMGMz4SY",
    authDomain: "team-voting-171d3.firebaseapp.com",
    databaseURL: "https://team-voting-171d3-default-rtdb.firebaseio.com",
    projectId: "team-voting-171d3",
    storageBucket: "team-voting-171d3.appspot.com",
    messagingSenderId: "869120674673",
    appId: "1:869120674673:web:4a9d50f07ec5b80a3244d0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();