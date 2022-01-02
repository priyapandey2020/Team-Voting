import firebase from 'firebase';

const firebaseConfig = {
    
  apiKey: "AIzaSyCZ4MbL1t34rpdKBknRFhvyDPhHWT-8IoE",
  authDomain: "classtest-44039.firebaseapp.com",
  projectId: "classtest-44039",
  storageBucket: "classtest-44039.appspot.com",
  messagingSenderId: "832773116722",
  appId: "1:832773116722:web:86553e92893e684ad0bd2b"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

export default firebase.database();