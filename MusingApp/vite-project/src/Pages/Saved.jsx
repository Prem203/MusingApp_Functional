import React, { useState, useEffect } from 'react';
import "../Styles/Saved.css";
import Header2 from './Header2';
import Footer from './Footer';
import "../Styles/Content.css";
import Posts from '../Models/Posts';

export default function Saved() {
  const [savedPosts, setSavedPosts] = useState([]);

  useEffect(() => {
    async function fetchSavedPosts() {
      try {
        console.log("fetchSaved entered!!!!!!!! wooo")
        const postObject = new Posts();
        const savedPosts = await postObject.fetchSaved();
        setSavedPosts(savedPosts);
      } catch (error) {
        console.error('Error fetching saved:', error);
      }
    }
    fetchSavedPosts();
  }, []);

  console.log("Saved!!", savedPosts);
  
  return (
    <div>
      <Header2 />
      <h4>Saved</h4>  
      
      {savedPosts.map((post, index) => (
        <div key={index} className="saved-post">
          <div className='sav'>
            <h5>{post.savedPostDesc}</h5>
          </div>
          <p>Tag: {post.savedPostTag}</p>
          <br></br>
          <br></br>
        </div>
      ))}
      
      <Footer />
    </div>
  );
}
