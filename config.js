import firebase from 'firebase';

// add SDK Firebase

    const firebaseConfig = {
        apiKey: "AIzaSyCXgycfBlo498ZG6-4a8qpV-nun6eMVVdM",
        authDomain: "class-test-5705b.firebaseapp.com",
        projectId: "class-test-5705b",
        storageBucket: "class-test-5705b.appspot.com",
        messagingSenderId: "1070719826605",
        appId: "1:1070719826605:web:42b1ca6687240d9575a424"
      };
      

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();