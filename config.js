import firebase from 'firebase';

// add SDK Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyA4pt1ZCSSegc_mbfu9DUz9yPSCFtdnYHc",
        authDomain: "class-test-d912c.firebaseapp.com",
        projectId: "class-test-d912c",
        storageBucket: "class-test-d912c.appspot.com",
        messagingSenderId: "659028946329",
        appId: "1:659028946329:web:5779eeb11816f7e8e57708"
      };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();