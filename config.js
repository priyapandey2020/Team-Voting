import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAsZqhwgqaTWPzzBK5_sIe9mWRxjk4w_kM",
  authDomain: "project-67-a13f1.firebaseapp.com",
  projectId: "project-67-a13f1",
  storageBucket: "project-67-a13f1.appspot.com",
  messagingSenderId: "1309287450",
  appId: "1:1309287450:web:b740f857859170089a1da3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
