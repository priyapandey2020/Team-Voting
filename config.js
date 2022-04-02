import firebase from 'firebase';

// add SDK Firebase

    const firebaseConfig = {
        apiKey: "AIzaSyDXzJ4aWjiHpnxreeOxLYAhcfW8DX_haHc",
        authDomain: "team-voting-app-447c4.firebaseapp.com",
        databaseURL: "https://team-voting-app-447c4-default-rtdb.firebaseio.com",
        projectId: "team-voting-app-447c4",
        storageBucket: "team-voting-app-447c4.appspot.com",
        messagingSenderId: "252113452481",
        appId: "1:252113452481:web:90aece007aa77be71e0340"
      };
      


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();