import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    
        apiKey: "AIzaSyDoPeZLOa0JnN6KCHIkK0EQDKuqIFBpZfM",
        authDomain: "class-58-pro-ject.firebaseapp.com",
        databaseURL: "https://class-58-pro-ject-default-rtdb.firebaseio.com",
        projectId: "class-58-pro-ject",
        storageBucket: "class-58-pro-ject.appspot.com",
        messagingSenderId: "229375268289",
        appId: "1:229375268289:web:3e6bf302f321ee0062cb40"
      
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();