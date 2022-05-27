import firebase from 'firebase';

// add SDK Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyDYVp9EsZyTphe23xfIWytyxGY7q5gIkYA",
        authDomain: "class-quiz-c19a1.firebaseapp.com",
        projectId: "class-quiz-c19a1",
        storageBucket: "class-quiz-c19a1.appspot.com",
        messagingSenderId: "701096752486",
        appId: "1:701096752486:web:30946e9860d32afa3244a7"
      };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();