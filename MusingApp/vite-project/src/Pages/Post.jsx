import React, { Component, useState } from 'react';
import Header2 from './Header2';
import Footer from './Footer';
import Posts from '../Models/Posts';
import "../Styles/Post.css";
import "../Styles/Content.css";

export default function Post() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     post: '',
  //     tag: ''
  //   };
  //   this.postObject = new Posts(); 
  // }

  const [post, setPost] = useState('');
  const [tag, setTag] = useState('');
  const postObject = new Posts();

  const handlePostChange = (event) => {
    setPost(event.target.value);
  };

  const handleTagChange = (event) => {
    setTag(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      await postObject.savePostAndTag(post, tag);
      setPost('');
      setTag('');

    } catch (error) {
      console.error('Error saving post and tag:', error);
    }
  };

    return (
      <div>
        <Header2 />
        <div className='sidetag'>
          <h4>Post:</h4>
          <div>
            <textarea
              className="tag"
              value={tag}
              onChange={handleTagChange}
              placeholder="Enter Tag"
            />
          </div>
        </div>

        <textarea
          className="post"
          value={post}
          onChange={handlePostChange}
          placeholder="Type here"
        />
        
        <input
          className="btn btn-primary pos"
          type="button"
          value="Submit"
          onClick={handleSubmit}
        />
        <Footer />
      </div>
    );
  }
