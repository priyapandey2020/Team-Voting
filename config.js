import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB4bxzUQIZatiD8TG_EJYTNKwenlIpfXK0",
    authDomain: "pro-c67-cfd27.firebaseapp.com",
    projectId: "pro-c67-cfd27",
    storageBucket: "pro-c67-cfd27.appspot.com",
    messagingSenderId: "337692074075",
    appId: "1:337692074075:web:fc813c313e1cccb5e21f7e",
    measurementId: "G-2E63RRWJ4X"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();