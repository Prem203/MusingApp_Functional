import { doc, getDocs, collection, addDoc, updateDoc, getDoc } from "firebase/firestore";
import MyFirebaseDB from "./MyFireBaseDB";

export default class Comments {

    constructor({
         commenid = "", 
         commentdesc = "",} = {}) {   
      this.commenid = commenid;
      this.commentdesc = commentdesc;
      this.db = new MyFirebaseDB();
    }

    async saveComment(postId, comment) {
        try {
            // Get a reference to the 'comments' collection inside the 'posts' collection
            const postRef = doc(this.db.db, "posts", postId);
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
    }

    async getComments(postId) {
        try {
            const postRef = doc(this.db.db, "posts", postId);
            const commentsCollectionRef = collection(postRef, "comment");
            const commentsSnapshot = await getDocs(commentsCollectionRef);
            console.log('commentsSnapshot:', commentsSnapshot);
            const commentsList = [];
            const comments = commentsSnapshot.docs.map(doc => {
            const data = doc.data();
            commentsList.push(data.desc); // Push the value of the 'desc' field to the commentsList array
});

            console.log('comments:', commentsList);
            return commentsList;
        } catch (error) {
            console.error('Error getting comments:', error);
            throw error;
        }
    }
    
}
      

