import firebase from 'firebase';
 const firebaseConfig = {
    apiKey: "AIzaSyCxBzLDoLpTcyiuAhrePfRf4RaCxN856Ao",
    authDomain: "c67-teamvoting.firebaseapp.com",
    databaseURL: "https://c67-teamvoting-default-rtdb.firebaseio.com",
    projectId: "c67-teamvoting",
    storageBucket: "c67-teamvoting.appspot.com",
    messagingSenderId: "682435700975",
    appId: "1:682435700975:web:66d910c72f24029e18531a"
  };
let app = firebase.initializeApp(firebaseConfig);
export default app.database();

