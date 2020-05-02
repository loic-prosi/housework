import firebase from "firebase";
import { firebaseConfig } from "config/firebase.js";

let firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
