import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: 'AIzaSyBGGrAwGt0fkYQcBlHK-PUxiXBOv63FcpM',
    authDomain: 'project-58-7f755.firebaseapp.com',
    databaseURL: 'https://project-58-7f755-default-rtdb.firebaseio.com',
    projectId: 'project-58-7f755',
    storageBucket: 'project-58-7f755.appspot.com',
    messagingSenderId: '665967099074',
    appId: '1:665967099074:web:1e4ea1d24438067f040f5b',
    measurementId: 'G-LXD0H2E94W',
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();