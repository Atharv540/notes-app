
import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyA-9PcFEHDdrHbh5iulfAM2xh59xNNuiHM",
    authDomain: "notesapp-41e50.firebaseapp.com",
    projectId: "notesapp-41e50",
    storageBucket: "notesapp-41e50.appspot.com",
    messagingSenderId: "834410615298",
    appId: "1:834410615298:web:12c6ceed6480b4b44f0d1b",
    measurementId: "G-6ZDKMYRQXD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();