import firebase from 'firebase';

// add SDK Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyB8_1u841oB4lrOtKMw0A0o-PkkwDIFgIA",
    authDomain: "teamvoterapp.firebaseapp.com",
    databaseURL: "https://teamvoterapp-default-rtdb.firebaseio.com",
    projectId: "teamvoterapp",
    storageBucket: "teamvoterapp.appspot.com",
    messagingSenderId: "358059344595",
    appId: "1:358059344595:web:6fd3afe9e5b37c774f4a26"
  };
// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();