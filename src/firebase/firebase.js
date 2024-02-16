import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyD9C_rBbrwtIPGryk2tPxDEwFul1HpgZxE",

  authDomain: "cyph3r-96497.firebaseapp.com",

  projectId: "cyph3r-96497",

  storageBucket: "cyph3r-96497.appspot.com",

  messagingSenderId: "702759051348",

  appId: "1:702759051348:web:96fd323ad2e3edca698dc1",

  measurementId: "G-00RL3WK4PX"
};
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();