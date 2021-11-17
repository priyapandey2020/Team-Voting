import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
        apiKey: "AIzaSyAIXpN1Ge1Bu_g62weMKc6WxN_0uPsHqcs",
        authDomain: "team-voting-5f2b5.firebaseapp.com",
        projectId: "team-voting-5f2b5",
        storageBucket: "team-voting-5f2b5.appspot.com",
        messagingSenderId: "704862997279",
        appId: "1:704862997279:web:4784d1e9835372f636fe2a"
      
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();