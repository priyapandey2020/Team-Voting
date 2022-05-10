import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
apiKey: "AIzaSyBRdb-mQ4ziX90esKnTlNnj2C6XuEHCxss",
    authDomain: "team-voting-app-827c9.firebaseapp.com",
    databaseURL: "https://team-voting-app-827c9-default-rtdb.firebaseio.com",
    projectId: "team-voting-app-827c9",
    storageBucket: "team-voting-app-827c9.appspot.com",
    messagingSenderId: "1082997482648",
    appId: "1:1082997482648:web:6bb53f6095b3330a005ced",
    measurementId: "G-QHCD16FR5F"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
