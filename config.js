import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyB9-i6nT3o7m_8gzYfyVNfs9fBe41ZFlF4",
  authDomain: "project-58-a6a4c.firebaseapp.com",
  databaseURL: "https://project-58-a6a4c-default-rtdb.firebaseio.com",
  projectId: "project-58-a6a4c",
  storageBucket: "project-58-a6a4c.appspot.com",
  messagingSenderId: "983276592067",
  appId: "1:983276592067:web:c0bd922254dcc18c547b76"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();