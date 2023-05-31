import React, { useState } from 'react';
import Comment from './Comment';

const Post = ({ avatar }) => {

    const Comment = ({ onSubmit }) => {
        const [commentText, setCommentText] = useState('');
      
        const handleCommentChange = (event) => {
          setCommentText(event.target.value);
        };
      
        const handleSubmit = (event) => {
          event.preventDefault();
          onSubmit(commentText);
          setCommentText('');
        };
      
        return (
          <div className="comment">
            <form onSubmit={handleSubmit}>
              <textarea value={commentText} onChange={handleCommentChange} placeholder="Enter your comment"></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        );
      };

      
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState(0);
    const [showComment, setShowComment] = useState(false);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleComment = () => {
        setShowComment(true);
    };

    const handleCommentSubmit = () => {
        setComments(comments + 1);
        setShowComment(false);
    };

    return (
        <div className="post">
            <div className="avatar">
                <img src={avatar.image} alt={avatar.name} />
                <h2>{avatar.name}</h2>
            </div>
            <p className="post-text">{avatar.post}</p>
            <div className="buttons">
                <button onClick={handleLike}>Like</button>
                <span>{likes}</span>
                <button onClick={handleComment}>Comment</button>
                <span>{comments}</span>
            </div>
            {showComment && <Comment onSubmit={handleCommentSubmit} />}
        </div>
    );
};

export default Post;
