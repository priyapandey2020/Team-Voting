import firebase from 'firebase';

    const firebaseConfig = {
        apiKey: "AIzaSyApjYYe-pRs_OCJLGrXHo_mly1WCwDnH8k",
        authDomain: "project-67-teamvoting.firebaseapp.com",
        databaseURL: "https://project-67-teamvoting-default-rtdb.firebaseio.com",
        projectId: "project-67-teamvoting",
        storageBucket: "project-67-teamvoting.appspot.com",
        messagingSenderId: "896407672119",
        appId: "1:896407672119:web:1d9f0b6102a79f0062f6b2"
      };

firebase.initializeApp(firebaseConfig);

export default firebase.database();