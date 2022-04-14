import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDIztuQRjBWBhonCxaZAQ3Fz_b6xiH6kSM",
    authDomain: "team-voting-app-e0668.firebaseapp.com",
    projectId: "team-voting-app-e0668",
    storageBucket: "team-voting-app-e0668.appspot.com",
    messagingSenderId: "51949294117",
    appId: "1:51949294117:web:add7cf5874c44e93d725cc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();