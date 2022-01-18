import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB2Xhc4m2ysq3qzI3ttmRPugvlOCvJIjWI",
    authDomain: "contribution-for-a-prpject.firebaseapp.com",
    projectId: "contribution-for-a-prpject",
    storageBucket: "contribution-for-a-prpject.appspot.com",
    messagingSenderId: "90893094598",
    appId: "1:90893094598:web:a148088920144aecff91c7"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();