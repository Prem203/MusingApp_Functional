import React, { Component } from 'react';
import "../Styles/Content.css";
import { Link } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import Posts from '../Models/Posts';

export default class Content extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
    this.postObject = new Posts();
  }


  componentDidMount() {
    console.log("enetered component")
    this.fetchPosts();
  }

  async fetchPosts() {
    try {
      console.log("fetchPosts entered!!!!!!!! wooo")
      const posts = await this.postObject.fetchPosts();
      
      this.setState({ posts });
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  async savePost(docid) {
    try {
      console.log("SavePost entered!!!!!!!! wooo")
      const posts = await this.postObject.addSavedPostId(docid);
      
    } catch (error) {
      console.error('Error saving posts:', error);
    }
  };
  
  
  render() {
    const{posts} = this.state;
    return (
    
      <div className='main-div' >
        <div>
        <div className='heading'>
            <h4>Trending Posts:</h4>
        </div>


        <div>
          
          {posts.map((post) => (
            <div>
            <div className='content'>
            <div key={post.id}>
              <p>{post.desc}</p>
            </div>
            </div>
            
          <div className='comsali'>
            <p className='like'>Tag:{post.tag}</p>

            <div className='comsa'>
            
            <button type="button" className="btn btn-primary btn-sm comment">
            <Link to= {`/comment?postid=${post.id}`}>
            Comment
            </Link>
            </button>

            <button type="button" className="btn btn-primary btn-sm save" onClick={() => this.savePost(post.id)}>
            Save
            </button>
            </div>

          </div>

        <br></br>
        <br></br>
        <br></br>
        </div>
          ))}
          
        </div>

        </div>

        
        
        <div className='divide'>
        </div>

        <div>
        <div className='todaysbook'>
            <p>Today's Book Recommendations:</p>
        </div>

        <div className='recommendation'>
            <ul>
                <li>"<a href="https://www.nytimes.com/2023/08/12/books/review/the-bee-sting-paul-murray.html" target="_blank">The Bee Sting</a>" by Paul Murray</li>
                <li>"<a href="https://www.nytimes.com/2023/03/20/books/catherine-lacey-biography-of-x.html" target="_blank">Biography of X</a>" by Catherine Lacey</li>
                <li>"<a href="https://www.nytimes.com/2023/03/13/books/eleanor-catton-birnam-wood.html" target="_blank">Birnam Wood</a>" by Eleanor Catton</li>
                <li>"<a href="https://www.nytimes.com/2023/07/23/books/review/the-country-of-the-blind-andrew-leland.html" target="_blank">The Country of the Blind</a>" by Andrew Leland</li>
            </ul>
            
        </div>
        </div>
      </div>
    )
  }
}
