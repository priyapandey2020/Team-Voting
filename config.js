import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBoyv2ObsT3Mz3s4EZ3QSSa3_MhLwxp2Uc",
    authDomain: "project67-edd58.firebaseapp.com",
    projectId: "project67-edd58",
    storageBucket: "project67-edd58.appspot.com",
    messagingSenderId: "657115400647",
    appId: "1:657115400647:web:f6ed6234bc5468a5caf1e2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();