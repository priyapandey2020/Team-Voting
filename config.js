import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDLQeMXdnDVAwjyzNBEyVGj_BSBufS3NVM",
    authDomain: "team-voting-340ae.firebaseapp.com",
    databaseURL: "https://team-voting-340ae-default-rtdb.firebaseio.com",
    projectId: "team-voting-340ae",
    storageBucket: "team-voting-340ae.appspot.com",
    messagingSenderId: "95820911052",
    appId: "1:95820911052:web:4ff64957e337af32964d69"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();