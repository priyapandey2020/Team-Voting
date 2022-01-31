import firebase from 'firebase';

// add SDK Firebase

  const firebaseConfig = {
  apiKey: "AIzaSyCn6sMmd5jUtn58gX73fpAsu5BCdRFzHIo",
  authDomain: "team-voting-app-49a1a.firebaseapp.com",
  projectId: "team-voting-app-49a1a",
  storageBucket: "team-voting-app-49a1a.appspot.com",
  messagingSenderId: "261758033430",
  appId: "1:261758033430:web:7bb72ecca2150d59065f37"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
