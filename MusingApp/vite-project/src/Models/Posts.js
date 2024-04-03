import { getDocs, collection, addDoc, updateDoc, getDoc, doc, query, where } from "firebase/firestore";
import MyFirebaseDB from "./MyFireBaseDB";

export default function Posts() {
  const db = new MyFirebaseDB();

  async function fetchPosts() {
    try {
      const postCollection = collection(db.db, "posts");
      const postSnapshot = await getDocs(postCollection);
      const postList = postSnapshot.docs.map(doc => ({ id: doc.id, desc: doc.data().desc, tag: doc.data().tag }));
      console.log('Postlist - returning now', postList);
      return postList;
    } catch (error) {
      console.error("Error fetching post details:", error.message);
      return null;
    }
  }

  async function savePostAndTag(post, tag) {
    try {
      const postsCollection = collection(db.db, 'posts');
      const docRef = await addDoc(postsCollection, { desc: post, tag: tag });
      const docId = docRef.id;
      console.log('Newly generated document ID:', docId);
      console.log('Post and tag saved successfully');
      await addPostId(docId);
    } catch (error) {
      console.error('Error saving post and tag:', error.message);
      throw error;
    }
  }

  async function addPostId(docid) {
    try {
      const usersCollection = collection(db.db, 'users');
      const userDocRef = doc(usersCollection, 'PremVora');
      const userDocSnapshot = await getDoc(userDocRef);
    
      if (userDocSnapshot.exists()) {
        await updateDoc(userDocRef, { posts: docid });
        console.log('User field updated successfully');
      } else {
        console.error('User document not found');
      }
    } catch (error) {
      console.error('Error inside updating:', error.message);
      throw error;
    }
  }

  async function addSavedPostId(docid) {
    try {
      const usersCollection = collection(db.db, 'users');
      const userDocSnapshot = await getDocs(usersCollection);
      if (!userDocSnapshot.empty) {
        const firstUserDoc = userDocSnapshot.docs[0];
        const userDocRef = doc(usersCollection, firstUserDoc.id);
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          const userCurrentData = userDocSnap.data();
          const currentSavedPosts = userCurrentData.savedposts || [];
          const savedPosts = [...currentSavedPosts, docid];
          await updateDoc(userDocRef, { savedposts: savedPosts });
        } else {
          console.log("User document does not exist");
        }
      }
    } catch (error) {
      console.error('Error inside updating:', error.message);
      throw error;
    }
  }

  async function fetchSaved() {
    try {
      const savedPostList = [];
      const usersCollection = collection(db.db, 'users');
      const userDocSnapshot = await getDocs(usersCollection);
      if (!userDocSnapshot.empty) {
        const firstUserDoc = userDocSnapshot.docs[0];
        const userDocRef = doc(usersCollection, firstUserDoc.id);
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          const userCurrentData = userDocSnap.data();
          const currentSavedPosts = userCurrentData.savedposts || [];
          const postsCollection = collection(db.db, 'posts');
          const postsDocSnap = await getDocs(query(postsCollection, where('__name__', 'in', currentSavedPosts)));
          postsDocSnap.forEach(doc => {
            const data = doc.data();
            const newSavedPost = {
              savedPostId: doc.id,
              savedPostDesc: data.desc,
              savedPostTag: data.tag,
            };
            savedPostList.push(newSavedPost);
          });
          console.log(savedPostList);
          return savedPostList;
        } else {
          console.log("User document does not exist");
        }
      }
    } catch (error) {
      console.error('Error fetching saved posts:', error.message);
      throw error;
    }
  }

  return {
    fetchPosts,
    savePostAndTag,
    addPostId,
    addSavedPostId,
    fetchSaved
  };
}
