import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import defaultProject from "./firebase.config.js";

const defaultStorage = getStorage(defaultProject);
const defaultFirestore = getFirestore(defaultProject);

export { defaultStorage, defaultFirestore };