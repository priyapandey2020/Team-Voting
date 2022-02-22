import firebase from "firebase";

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAo5DQFdLUljcGAIHbZzIl-08K-oTjWtbI",
  authDomain: "pro-67--team-voting.firebaseapp.com",
  projectId: "pro-67--team-voting",
  storageBucket: "pro-67--team-voting.appspot.com",
  messagingSenderId: "1042130991628",
  appId: "1:1042130991628:web:59819bdb8b5cef03738c29",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
