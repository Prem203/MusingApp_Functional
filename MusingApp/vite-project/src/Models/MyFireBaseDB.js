import firebaseConfigInstance from "./FireBaseConfig";

export default function MyFirebaseDB() {
  return {
    db: firebaseConfigInstance.db
  };
}
