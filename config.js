import firebase from 'firebase';

// add SDK Firebase
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM_f_JHQRAOibSv85VDVoKiiCCsb6IJF8",
  authDomain: "classtest-3cbd7.firebaseapp.com",
  projectId: "classtest-3cbd7",
  storageBucket: "classtest-3cbd7.appspot.com",
  messagingSenderId: "493357838565",
  appId: "1:493357838565:web:3acfcf2c46270f4922e40c",
  measurementId: "G-LQKZHBTS8S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
