import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAkiJ7McZONQmtpgFsa_ZiluHE1cpNL92U",
    authDomain: "teamvotingapp-e41e9.firebaseapp.com",
    projectId: "teamvotingapp-e41e9",
    storageBucket: "teamvotingapp-e41e9.appspot.com",
    messagingSenderId: "134750976376",
    appId: "1:134750976376:web:bbe5f93d7ec6fa596c308d"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();