import React, { Component } from 'react'
import "../Styles/Saved.css"
import Header2 from './Header2';
import Footer from './Footer';
import "../Styles/Content.css";
import Posts from '../Models/Posts';

export default class Saved extends Component {

  constructor(props){
    super(props);
    this.state = {
      savedPosts: [new Posts()],
    };
    this.postObject = new Posts();
  }

  componentDidMount() {
    console.log("saved postsss")
    this.fetchSaved();
  }

  async fetchSaved() {
    try {
      console.log("fetchSaved entered!!!!!!!! wooo")
      const savedPosts = await this.postObject.fetchSaved();
      
      this.setState({ savedPosts: savedPosts });
    } catch (error) {
      console.error('Error fetching saved:', error);
    }
  };

  render() {
    const {savedPosts} = this.state;
    console.log("Saved!!", savedPosts);
    return (
      <div>
        <Header2 />
        <h4>Saved</h4>  
        
          {savedPosts.map((post, index) => (
            <div key={index} className="saved-post">
              <div className='sav'>
              <h5>{post.savedPostDesc}</h5>
              
              
              {/* Add more details as needed */}
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
}
