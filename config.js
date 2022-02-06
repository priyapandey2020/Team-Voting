import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBRq3VnwyRQbmx3-W-JM185V9uaYbo_rlo',
  authDomain: 'project-67-87138.firebaseapp.com',
  databaseURL: 'https://project-67-87138-default-rtdb.firebaseio.com',
  projectId: 'project-67-87138',
  storageBucket: 'project-67-87138.appspot.com',
  messagingSenderId: '119493850750',
  appId: '1:119493850750:web:7e2c67a09311c818b50a2f',
};

if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default firebase.database();
