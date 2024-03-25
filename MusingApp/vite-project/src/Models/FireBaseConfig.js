import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCWe6C6rm3wtQhxlX24IRIjOIJDUzlF6Y8",
  authDomain: "pdpproj-37201.firebaseapp.com",
  projectId: "pdpproj-37201",
  storageBucket: "pdpproj-37201.appspot.com",
  messagingSenderId: "341771127779",
  appId: "1:341771127779:web:edb7d8642681d4f36e2ed6",
  measurementId: "G-0FM8FBTQ2Q"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export default {
  app,
  db,
  storage
};
