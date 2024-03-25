import { doc, collection, addDoc, getDocs } from "firebase/firestore";
import MyFirebaseDB from "./MyFireBaseDB";

export default function Comments() {
  const db = new MyFirebaseDB();

  const saveComment = async (postId, comment) => {
    try {
      // Get a reference to the 'comments' collection inside the 'posts' collection
      const postRef = doc(db.db, "posts", postId);
      const commentsCollectionRef = collection(postRef, "comment");

      // Add a new document with the comment data
      await addDoc(commentsCollectionRef, {
        desc: comment,
      });

      console.log("Comment added successfully!");
    } catch (error) {
      console.error("Error adding comment:", error);
      throw error; // Rethrow the error for handling in the caller
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
