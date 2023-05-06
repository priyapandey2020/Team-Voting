import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBSdQn83PrSoLurhqc421WvroFv4QXoxIo",
  authDomain: "classtest-e8928.firebaseapp.com",
  projectId: "classtest-e8928",
  storageBucket: "classtest-e8928.appspot.com",
  messagingSenderId: "454686966639",
  appId: "1:454686966639:web:902fed210d8820ba8e9e9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase.database();
