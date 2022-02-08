import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyAzHH9HvDJnckT484EBtmzWMXM5dpR4pXA",
  authDomain: "team-voting-app-bcd7e.firebaseapp.com",
  projectId: "team-voting-app-bcd7e",
  storageBucket: "team-voting-app-bcd7e.appspot.com",
  messagingSenderId: "588968602256",
  appId: "1:588968602256:web:75ffea49cb8e5f1eca4615",
  measurementId: "G-3FCCMGZFNT"
};

  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();