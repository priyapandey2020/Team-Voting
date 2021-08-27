import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCiAYcEXdH1umSB3AxeTi60LWa285AkkWo",
    authDomain: "schoolvotingapp-1d5ef.firebaseapp.com",
    databaseURL: "https://schoolvotingapp-1d5ef-default-rtdb.firebaseio.com",
    projectId: "schoolvotingapp-1d5ef",
    storageBucket: "schoolvotingapp-1d5ef.appspot.com",
    messagingSenderId: "987186364000",
    appId: "1:987186364000:web:457c27a3e5497a8f2d4d05"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();