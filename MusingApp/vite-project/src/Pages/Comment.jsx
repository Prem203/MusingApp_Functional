import React, { Component } from 'react';
import Header2 from './Header2';
import Footer from './Footer';
import '../Styles/Comment.css';
import Comments from '../Models/Comments'
import PropTypes from 'prop-types';

export default class Comment extends Component {

  constructor(props){
    super(props);
    this.state = {
      comments: [],
      comment: "",
      postId: "",
    };
    this.commentObject = new Comments();

  }

  componentDidMount() {
    const urlCommentParams = new URLSearchParams(window.location.search);
    const postId = urlCommentParams.get("postid");
    if (postId) {
      this.fetchComments(postId);
  }
  this.setState({ postId });
  }

  async fetchComments(postId) {
    try {
        const comments = await this.commentObject.getComments(postId);
        console.log("Fetched comments:", comments);
        this.setState({ comments });
    } catch (error) {
        console.error('Error fetching comments:', error);
    }
}


  handleCommentChange = (event) => {
    this.setState({ comment: event.target.value }); // Update the comment state
  };

  handleSubmit = async () => {
    const { comment, postId } = this.state;
    try {
      // Save post and tag to the database
      await this.commentObject.saveComment(postId, comment);

      // Reset input fields after saving
      this.setState((prevState) => ({
        comments: [...prevState.comments, comment],
        comment: '' // Reset the comment input
      }));
    } catch (error) {
      console.error('Error saving comment:', error);
    }
  };

  
  render() {
    const { comment } = this.state;
    console.log("this.state--->",this.state.comments);

    return (
        <div>
            <Header2 />
            <h4>Comments:</h4>
            <div className='comm'>
              <ul>
              {this.state.comments.map((comment, index) => (
              <div key={index} className="comment">
              <li>{comment}</li>
              </div>
              ))}
              </ul>
            </div>
            <div>
                <textarea
                    className="commen"
                    value={comment}
                    onChange={this.handleCommentChange}
                    placeholder="Type here"
                />
            </div>
            <input
                className="btn btn-primary sub"
                type="button"
                value="Submit"
                onClick={this.handleSubmit}
            />
            <Footer />
        </div>
    );
}
}

