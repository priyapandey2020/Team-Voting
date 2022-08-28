import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyASKJdW50neev6iIQpCh1EpD6bbVkPDDQM",
    authDomain: "teamvotingapp-8e3f5.firebaseapp.com",
    projectId: "teamvotingapp-8e3f5",
    storageBucket: "teamvotingapp-8e3f5.appspot.com",
    messagingSenderId: "336296432669",
    appId: "1:336296432669:web:6a4a9380710d72d1d322f4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
