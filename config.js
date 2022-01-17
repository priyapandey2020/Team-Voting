import firebase from 'firebase';

// add SDK Firebase

    const firebaseConfig = {
        apiKey: "AIzaSyCp1RDSL0xbyYYTY3Ua_-Foh5PaRa1Bk7I",
        authDomain: "teamvotingapp-2a84d.firebaseapp.com",
        databaseURL: "https://teamvotingapp-2a84d-default-rtdb.firebaseio.com",
        projectId: "teamvotingapp-2a84d",
        storageBucket: "teamvotingapp-2a84d.appspot.com",
        messagingSenderId: "337878392939",
        appId: "1:337878392939:web:6fa9e0596f83dca285912e"
      };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();