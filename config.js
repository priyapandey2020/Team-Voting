import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAGn9s46INDFAhlC_hPoAI-vVa7Xb3-YtE",
  authDomain: "pr67-28381.firebaseapp.com",
  projectId: "pr67-28381",
  storageBucket: "pr67-28381.appspot.com",
  messagingSenderId: "17807071500",
  appId: "1:17807071500:web:d5be850e5ccc9619699129"
};
// Initialize Firebase
if(firebase.apps.length===0){
firebase.initializeApp(firebaseConfig)
}

export default firebase.database();