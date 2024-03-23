import firebaseConfigInstance from "./FireBaseConfig";

export default class MyFirebaseDB {
    constructor() {
      this.db = firebaseConfigInstance.db; // You need to initialize this.db with the firestore instance from your FirebaseConfig
    }

    
}