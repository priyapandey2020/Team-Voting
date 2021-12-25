import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    const firebaseConfig = {
        apiKey: "AIzaSyAklrwp1-r1ScVfw6y8XnvspL13iwNBqkE",
        authDomain: "project-67-fe100.firebaseapp.com",
        databaseURL: "https://project-67-fe100-default-rtdb.firebaseio.com",
        projectId: "project-67-fe100",
        storageBucket: "project-67-fe100.appspot.com",
        messagingSenderId: "416282545969",
        appId: "1:416282545969:web:cf318e1310d2ae48bc6a10"
      };
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();