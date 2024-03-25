import React, { useState, useEffect } from 'react';
import Header2 from './Header2';
import Footer from './Footer';
import '../Styles/Comment.css';
import Comments from '../Models/Comments'

export default function Comment() {

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     comments: [],
  //     comment: "",
  //     postId: "",
  //   };
  //   this.commentObject = new Comments();

  // }

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const [postId, setPostId] = useState('');
  const commentObject = new Comments();


  useEffect(() => {
    const urlCommentParams = new URLSearchParams(window.location.search);
    const postId = urlCommentParams.get("postid");
    if (postId) {
          fetchComments(postId);
          setPostId(postId);
      }
  }, [])
  // componentDidMount() {
  //   const urlCommentParams = new URLSearchParams(window.location.search);
  //   const postId = urlCommentParams.get("postid");
  //   if (postId) {
  //     this.fetchComments(postId);
  // }
  // this.setState({ postId });
  // }

  const fetchComments = async (postId) => {
    try {
      const comments = await commentObject.getComments(postId);
      console.log("Fetched comments:", comments);
      setComments(comments);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };


  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      await commentObject.saveComment(postId, comment);
      setComments((prevComments) => [...prevComments, comment]);
      setComment('');
    } catch (error) {
      console.error('Error saving comment:', error);
    }
  };


    return (
        <div>
            <Header2 />
            <h4>Comments:</h4>
            <div className='comm'>
              <ul>
              {comments.map((comment, index) => (
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
                    onChange={handleCommentChange}
                    placeholder="Type here"
                />
            </div>
            <input
                className="btn btn-primary sub"
                type="button"
                value="Submit"
                onClick={handleSubmit}
            />
            <Footer />
        </div>
    );
}
