import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAIKFKcZCoxCP58v0V4rPjPx1iSi8xDItU",
    authDomain: "my-quiz-game-32a91.firebaseapp.com",
    databaseURL: "https://my-quiz-game-32a91-default-rtdb.firebaseio.com",
    projectId: "my-quiz-game-32a91",
    storageBucket: "my-quiz-game-32a91.appspot.com",
    messagingSenderId: "634847826731",
    appId: "1:634847826731:web:df6aed0bf64e98ffd56b6e"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();