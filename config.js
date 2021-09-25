import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCTOgsNaEHAdJ7lO4KIj5zurPz_rFWl4yM",
    authDomain: "team-voting-d0957.firebaseapp.com",
    databaseURL: "https://team-voting-d0957-default-rtdb.firebaseio.com",
    projectId: "team-voting-d0957",
    storageBucket: "team-voting-d0957.appspot.com",
    messagingSenderId: "311305768743",
    appId: "1:311305768743:web:ae7f16843c716476d26302"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();