import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyACqICkef8ggl6aw54G9jqQpuVRuCXU650",
    authDomain: "pro-67-1.firebaseapp.com",
    databaseURL: "https://pro-67-1-default-rtdb.firebaseio.com",
    projectId: "pro-67-1",
    storageBucket: "pro-67-1.appspot.com",
    messagingSenderId: "815296639430",
    appId: "1:815296639430:web:19e1f649cb707f7d9c82c7"
  };
// Initialize Firebase
if(!firebaseConfig.length){
firebase.initializeApp(firebaseConfig);
}

export default firebase.database();