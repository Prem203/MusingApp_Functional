import React, { Component } from 'react';
import Header2 from './Header2';
import Footer from './Footer';
import Posts from '../Models/Posts';
import "../Styles/Post.css";
import "../Styles/Content.css";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: '',
      tag: ''
    };
    this.postObject = new Posts(); 
  }

  handlePostChange = (event) => {
    this.setState({ post: event.target.value });
  };

  handleTagChange = (event) => {
    this.setState({ tag: event.target.value });
  };

  handleSubmit = async () => {
    const { post, tag } = this.state;
    try {
      // Save post and tag to the database
      await this.postObject.savePostAndTag(post, tag);

      // Reset input fields after saving
      this.setState({ post: '', tag: '' });
    } catch (error) {
      console.error('Error saving post and tag:', error);
    }
  };

  render() {
    const { post, tag } = this.state;

    return (
      <div>
        <Header2 />
        <div className='sidetag'>
          <h4>Post:</h4>
          <div>
            <textarea
              className="tag"
              value={tag}
              onChange={this.handleTagChange}
              placeholder="Enter Tag"
            />
          </div>
        </div>

        <textarea
          className="post"
          value={post}
          onChange={this.handlePostChange}
          placeholder="Type here"
        />
        
        <input
          className="btn btn-primary pos"
          type="button"
          value="Submit"
          onClick={this.handleSubmit}
        />
        <Footer />
      </div>
    );
  }
}
