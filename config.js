import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCNcg3Ua5fVO8U14_iIgpX-32QaEn4pwVY",
    authDomain: "voting-app-7f029.firebaseapp.com",
    databaseURL:"https://voting-app-7f029.firebaseio.com",
    projectId: "voting-app-7f029",
    storageBucket: "voting-app-7f029.appspot.com",
    messagingSenderId: "276864766761",
    appId: "1:276864766761:web:e41bf6722f39ba30601d38"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
