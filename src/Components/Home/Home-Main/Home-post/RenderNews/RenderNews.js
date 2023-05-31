// import React, { useState } from "react";
import Comment from "./Comment";
import "./RenderNews.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComment, faPaperPlane, faRepeat, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import profileimage from "./profile.png";

const Feed = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('https://6415426e4f32ca329191ef50.mockapi.io/api/posts/users');
      setUsers(response.data);
    };
    fetchUsers();
  }, []);
  
  return (
    <div>
      {users.map((user) => (
        <Post key={user.id} user={user} />
      ))}
    </div>
  );
};

const Post = ({ user }) => {

  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  const handleCommentSubmit = (text) => {
    const newComment = { text };
    setComments([...comments, newComment]);
  };
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };
  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="Fetchedpost">
      <div className="one">
        <div className="one-one">
        <div className="two">
          <div className="two-one">
            <img src={user.profile} alt={user.name} />
          </div>
          <div className="two-two">
            <h5>{user.name}</h5>
            <h6>{user.followers} Followers</h6>
          </div>
          
        </div>
        <div className="two-three"><FontAwesomeIcon className="shareIcon22" icon={faChevronRight} /></div>
        </div>
        <div className="three">
          <p>{user.Article}</p>
        </div>

        <div className="four">
          <img src={user.image} alt={user.image} />
        </div>
        <div className="four-four">
          <div>{likes} Likes</div>
          <div>{comments.length} Comments</div>
        </div>
        <div className="five">
          <div className="five-one">
            <button onClick={handleLike}><FontAwesomeIcon className="shareIcon1" icon={faThumbsUp} /></button>
            <button><FontAwesomeIcon className="shareIcon1" icon={faPaperPlane} /></button>
            <button><FontAwesomeIcon className="shareIcon1" icon={faRepeat} /></button>
            <button onClick={toggleComments}>
              <FontAwesomeIcon className="shareIcon1" icon={faComment} />
            </button>
          </div>
          {showComments && (
            <div className="five-two">
              <h4>Comments</h4>
              <div className="commentSubmit">
                {comments.map((comment, index) => (
                  <div className="commentssaved">
                  <p className="commentsboxtext" key={index}><img className="commentsimage" src={profileimage} alt="image" />{comment.text}</p>
                  </div>
                ))}
                <Comment onSubmit={handleCommentSubmit} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


export default Feed;
