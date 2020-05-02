import firebase from "services/firebase/init";
import { databasePath } from "config/firebase";

const database = firebase.database().ref(databasePath);

export default database;
