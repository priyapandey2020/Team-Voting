import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
        apiKey: "AIzaSyABROMXplIKstYr2kQ3rSiUErmoLz4r_TE",
        authDomain: "teamvoting-aae45.firebaseapp.com",
        databaseURL: "https://teamvoting-aae45-default-rtdb.firebaseio.com",
        projectId: "teamvoting-aae45",
        storageBucket: "teamvoting-aae45.appspot.com",
        messagingSenderId: "976758763661",
        appId: "1:976758763661:web:8e5d934e96e10c5aedb2c4"
  
      
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();