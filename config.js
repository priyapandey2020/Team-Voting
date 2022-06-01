import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
var firebaseConfig = {
    apiKey: "AIzaSyCGQqkM72dCMDDLopeQSWAbLQKy4jA0U38",
    authDomain: "pro-c67-project.firebaseapp.com",
    projectId: "pro-c67-project",
    storageBucket: "pro-c67-project.appspot.com",
    messagingSenderId: "835065177571",
    appId: "1:835065177571:web:659d35b101788209ca2cd6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
