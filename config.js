import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC3BLuwxHHkHvhtT1AJLlHgsEc_LwEu7nc",
  authDomain: "classtest-1abca.firebaseapp.com",
  projectId: "classtest-1abca",
  storageBucket: "classtest-1abca.appspot.com",
  messagingSenderId: "778425300082",
  appId: "1:778425300082:web:c837394c8bb0a50faefeeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
