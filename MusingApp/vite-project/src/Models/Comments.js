import { doc, collection, addDoc, getDocs } from "firebase/firestore";
import MyFirebaseDB from "./MyFireBaseDB";

export default function Comments() {
  const db = new MyFirebaseDB();

  const saveComment = async (postId, comment) => {
    try {
      const postRef = doc(db.db, "posts", postId);
      const commentsCollectionRef = collection(postRef, "comment");

      await addDoc(commentsCollectionRef, {
        desc: comment,
      });

      console.log("Comment added successfully!");
    } catch (error) {
      console.error("Error adding comment:", error);
      throw error; 
    }
  };

  const getComments = async (postId) => {
    try {
      const postRef = doc(db.db, "posts", postId);
      const commentsCollectionRef = collection(postRef, "comment");
      const commentsSnapshot = await getDocs(commentsCollectionRef);

      const commentsList = commentsSnapshot.docs.map((doc) => doc.data().desc);

      console.log('comments:', commentsList);
      return commentsList;
    } catch (error) {
      console.error('Error getting comments:', error);
      throw error;
    }
  };

  return {
    saveComment,
    getComments,
  };
}
