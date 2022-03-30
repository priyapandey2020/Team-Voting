import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    
        apiKey: "AIzaSyBv50bKLUIITiJLWOS84hVNxO2qF7N8TRo",
        authDomain: "team-voting-app-c4018.firebaseapp.com",
        projectId: "team-voting-app-c4018",
        storageBucket: "team-voting-app-c4018.appspot.com",
        messagingSenderId: "456915366274",
        appId: "1:456915366274:web:58d47d71ebe32892295f9b"
      
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();