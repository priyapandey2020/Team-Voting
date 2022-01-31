import firebase from 'firebase';

// add SDK Firebase
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqNpIzjvaW7NynCDMAKwdshHvzJ63uVN0",
  authDomain: "p67-team-voting.firebaseapp.com",
  projectId: "p67-team-voting",
  storageBucket: "p67-team-voting.appspot.com",
  messagingSenderId: "91431129854",
  appId: "1:91431129854:web:586aa030eb0c73acffcbaf"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();