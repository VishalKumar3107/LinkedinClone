import React, { useState } from 'react';
import Comment from './Comment';
// import { avatar.name } from "../Api";

const Post = () => {
    const avatar = {
        "name": "Stephanie Upton",
        "profile": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/418.jpg",
        "Article": "Rem pariatur minus vero distinctio explicabo ea corporis. Reiciendis corporis enim blanditiis ratione. Repudiandae quibusdam earum tenetur neque earum iusto est. Voluptatum laborum ut impedit nobis.",
        "image": "https://loremflickr.com/640/480/food",
        "ID": "1"
    };
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState(false);

    const handleCommentSubmit = (text) => {
        // if (!text || text.trim() === "") {
        //     return;
        // }
        const newComment = { text };
        
        setComments([...comments, newComment]);
    };
    const handleLike = () => {
        setLikes(likes + 1);
    };
    const toggleComments = () => {
        setShowComments(!showComments);
    };

    return (
        <div>
            <div>
                <img src={avatar.image} alt={avatar.name} />
                <h2>{avatar.name}</h2>
                <p>{avatar.post}</p>
                <button onClick={handleLike}>Like</button>
                <span>{likes}</span>
                <button onClick={toggleComments}>
                    {comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}
                </button>
            </div>
            {showComments && (
                <div>

                    <h3>Comments</h3>
                    {comments.map((comment, index) => (
                        <p key={index}>{comment.text}</p>
                    ))}
                    <Comment onSubmit={handleCommentSubmit} />
                </div>
            )}
        </div>
    );
};

export default Post;
