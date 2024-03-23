// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
class firebaseConfig {
  constructor() {
  this.app =  initializeApp({
  apiKey: "AIzaSyCWe6C6rm3wtQhxlX24IRIjOIJDUzlF6Y8",
  authDomain: "pdpproj-37201.firebaseapp.com",
  projectId: "pdpproj-37201",
  storageBucket: "pdpproj-37201.appspot.com",
  messagingSenderId: "341771127779",
  appId: "1:341771127779:web:edb7d8642681d4f36e2ed6",
  measurementId: "G-0FM8FBTQ2Q"
});
this.db = getFirestore(this.app);
this.storage = getStorage(this.app);
}
}

const firebaseConfigInstance = new firebaseConfig();
export default firebaseConfigInstance;
