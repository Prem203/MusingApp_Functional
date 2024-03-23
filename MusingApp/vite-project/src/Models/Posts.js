import { doc, getDocs, collection, addDoc, updateDoc, getDoc, query, where } from "firebase/firestore";
import MyFirebaseDB from "./MyFireBaseDB";
import Post from "../Pages/Post";

export default class Posts {

    constructor({
         postId = "", 
         postdesc = "",
         postag = ""} = {}) {   
      this.postId = postId;
      this.postdesc = postdesc;
      this.postag = postag;
      this.db = new MyFirebaseDB();
    }

      async fetchPosts() {
        try {
          const database = new MyFirebaseDB();
          console.log("hey enterd")
            const postcollection = await getDocs(collection(database.db, "posts"));
    
            const postList = [];
          console.log("postList  ppljkl",postList)
            for (let i of postcollection.docs){
              postList.push({id:i.id, desc:i.data().desc, tag:i.data().tag});
            }
            
            console.log('Postlist  - retrurning now',postList);
            return postList;
          } 
          
         catch (error) {
          console.error("Error fetching post details:", error);
          return null;
      }
    }

    async savePostAndTag(post, tag) {
      try {
        const database = new MyFirebaseDB();
        const postsCollection = collection(database.db, 'posts');
  
  
        const docRef = await addDoc(postsCollection, {
          desc: post,
          tag: tag
        });
        
      const docId = docRef.id;
      console.log('Newly generated document ID:', docId);

      console.log('Post and tag saved successfully');

      this.addPostId(docId);

      } catch (error) {
        console.error('Error saving post and tag:', error);
        throw error;
      }
    }
      async addPostId(docid) {

        try{
          const database = new MyFirebaseDB();
          const usersCollection = collection(database.db, 'users');

          const userDocRef = doc(usersCollection, 'PremVora');

          const userDocSnapshot = await getDocs(userDocRef);
          if (userDocSnapshot.exists()) {
          await updateDoc(userDocSnapshot, {
            ['posts']: docid
          });
          console.log('User field updated successfully');
          } else {
          console.error('User document not found');
          }
          
        }
        

        catch (error) {
          console.error('Error inside updating:', error);
          throw error;
        }
      }

      async addSavedPostId(docid) {

        try{
          const database = new MyFirebaseDB();
          const usersCollection = collection(database.db, 'users');
          const userDocSnapshot = await getDocs(usersCollection);
          if(!userDocSnapshot.empty){
            const firstUserDoc = userDocSnapshot.docs[0];
            const userDocRef = doc(database.db, "users", firstUserDoc.id);
            const userDocSnap = await getDoc(userDocRef);
            if(userDocSnap.exists()){
              const userCurrentData = userDocSnap.data();
              const currentSavedPosts = userCurrentData.savedposts || [];
              const savedPosts = [...currentSavedPosts, docid];
              await updateDoc(userDocRef, {savedposts: savedPosts});
            }
            else{
              console.log("User document does not exist");
            }
          }
        }

        catch (error) {
          console.error('Error inside updating:', error);
          throw error;
        }
      }

      async fetchSaved() {
        try {

          const savedPostList = [];
          const usersCollection = collection(this.db.db, 'users');
          const userDocSnapshot = await getDocs(usersCollection);
          if (!userDocSnapshot.empty) {
            const firstUserDoc = userDocSnapshot.docs[0];
            const userDocRef = doc(this.db.db, "users", firstUserDoc.id);
            const userDocSnap = await getDoc(userDocRef);
            if (userDocSnap.exists()) {
              const userCurrentData = userDocSnap.data();
              const currentSavedPosts = userCurrentData.savedposts || [];
              const postsCollection = collection(this.db.db, 'posts');

              const postsDocSnap = await getDocs(query(postsCollection, where('__name__', 'in', currentSavedPosts)));
        postsDocSnap.forEach(doc => {
          const data = doc.data();
          const newSavedPost = {
            savedPostId : doc.id,
            savedPostDesc : data.desc,
            savedPostTag : data.tag,
          }
          savedPostList.push(newSavedPost);
        });
        console.log(savedPostList);
        return savedPostList;
            } else {
              console.log("User document does not exist");
            }
          }
        } catch (error) {
          console.error('Error inside updating:', error);
          throw error;
        }
      }
      
    }
  