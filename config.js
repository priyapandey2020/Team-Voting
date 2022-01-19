import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
apiKey: "AIzaSyD5O1Hdz_bTem4GDEqJI7eB5Pr6xtWUIB8",
    authDomain: "team-voting-24ce5.firebaseapp.com",
    databaseURL: "https://team-voting-24ce5-default-rtdb.firebaseio.com",
    projectId: "team-voting-24ce5",
    storageBucket: "team-voting-24ce5.appspot.com",
    messagingSenderId: "678368843759",
    appId: "1:678368843759:web:3894e60df1c9ca64dbc81a",
    measurementId: "${config.measurementId}"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
