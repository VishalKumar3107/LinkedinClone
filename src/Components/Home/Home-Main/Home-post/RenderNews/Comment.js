import React, { useState } from 'react';

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

export default Comment;
