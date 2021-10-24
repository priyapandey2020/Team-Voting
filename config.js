import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyD0RvWPMyqgf9yRdnFx_xxVHeqlwtnsPOs",
    authDomain: "team-voting-app-99e15.firebaseapp.com",
    databaseURL: "https://team-voting-app-99e15-default-rtdb.firebaseio.com",
    projectId: "team-voting-app-99e15",
    storageBucket: "team-voting-app-99e15.appspot.com",
    messagingSenderId: "237422492221",
    appId: "1:237422492221:web:a24360751663cc4119c854"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();