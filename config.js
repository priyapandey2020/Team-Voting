import firebase from 'firebase';

  
    const firebaseConfig = {
  apiKey: "AIzaSyD_ehAwBUKZwrDxCcgsZUU0F_fWpR9quZA",
  authDomain: "vote-13a32.firebaseapp.com",
  projectId: "vote-13a32",
  storageBucket: "vote-13a32.appspot.com",
  messagingSenderId: "57877412609",
  appId: "1:57877412609:web:a313efd39482a5f9943900"
};



    
  

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();
