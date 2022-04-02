// Import the functions you need from the SDKs you need
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCc0W4HNTGorPUMrqOfBRYD-mRafvMRQA8',
  authDomain: 'project-58-77107.firebaseapp.com',
  databaseURL: 'https://project-58-77107-default-rtdb.firebaseio.com',
  projectId: 'project-58-77107',
  storageBucket: 'project-58-77107.appspot.com',
  messagingSenderId: '222093198497',
  appId: '1:222093198497:web:837fec04e255fc90fe9ce0',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default firebase.database();
