import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC8pq2pbhUL5lvSad4awjXUTWNw6esjs2g",
    authDomain: "project67-946ed.firebaseapp.com",
    projectId: "project67-946ed",
    storageBucket: "project67-946ed.appspot.com",
    messagingSenderId: "110684383828",
    appId: "1:110684383828:web:54cb982fd7b77e03211bc1"
  };

var firebaseConfig = {

};
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export default firebase.database();