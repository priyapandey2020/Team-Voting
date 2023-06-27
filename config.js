import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCfuBkBE9QracocARMrn_OZKZqDZo_YSvc",
  authDomain: "classtest1-dd8a9.firebaseapp.com",
  projectId: "classtest1-dd8a9",
  storageBucket: "classtest1-dd8a9.appspot.com",
  messagingSenderId: "1029695224196",
  appId: "1:1029695224196:web:cb6a2ebab32c1017c885d1",
  measurementId: "G-R3ZLD744M2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
