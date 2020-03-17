import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyBzwzMUr0lrILgsEyCh67yre3rYMQb6pAc",
    authDomain: "coronavirus-54cc8.firebaseapp.com",
    databaseURL: "https://coronavirus-54cc8.firebaseio.com",
    projectId: "coronavirus-54cc8",
    storageBucket: "coronavirus-54cc8.appspot.com",
    messagingSenderId: "575166872071",
    appId: "1:575166872071:web:e954bc94ac320d1d6b48a2",
    measurementId: "G-030X25NVQ5"
  };

firebase.initializeApp(config);
firebase.firestore();

export default firebase