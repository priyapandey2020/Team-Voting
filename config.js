import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyCNkGQoins2IsrjboYrF8MfbSamuBbX3BA",
  authDomain: "project-67-9df1d.firebaseapp.com",
  projectId: "project-67-9df1d",
  storageBucket: "project-67-9df1d.appspot.com",
  messagingSenderId: "549673769272",
  appId: "1:549673769272:web:88ee18a8393556172d89cd"
};
firebase.initializeApp(firebaseConfig);

export default firebase.database();