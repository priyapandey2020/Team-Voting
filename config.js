import firebase from 'firebase';

// add SDK Firebase

    var firebaseConfig = {
        apiKey: "AIzaSyCSpQVHoEes6y3MUNL040_07Wl6j1Q41AI",
        authDomain: "votingapp-b99b1.firebaseapp.com",
        databaseURL: "https://votingapp-b99b1-default-rtdb.firebaseio.com",
        projectId: "votingapp-b99b1",
        storageBucket: "votingapp-b99b1.appspot.com",
        messagingSenderId: "87037186115",
        appId: "1:87037186115:web:ea8736b5a3da7f10fac4f6"
      }


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();