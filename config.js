import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAMOVYTLmD3CDzdEi_lhJia8Q_-3ab-aV4",
    authDomain: "team-voting-app-ae793.firebaseapp.com",
    projectId: "team-voting-app-ae793",
    storageBucket: "team-voting-app-ae793.appspot.com",
    messagingSenderId: "486000955288",
    appId: "1:486000955288:web:ea476811fb7461889f25ed",
    measurementId: "G-HG35FDTFPD"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();