import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDDczEn9pJHkY7BlVUGWHvRG1nwl6EVK0Q",
  authDomain: "project-173bb.firebaseapp.com",
  databaseURL: "https://project-173bb-default-rtdb.firebaseio.com",
  projectId: "project-173bb",
  storageBucket: "project-173bb.appspot.com",
  messagingSenderId: "1089157994132",
  appId: "1:1089157994132:web:f4a03e2e79577512b04681"
};
let app

if(!firebase.apps.length){
app = firebase.initializeApp(firebaseConfig)

}

export default firebase.database();
