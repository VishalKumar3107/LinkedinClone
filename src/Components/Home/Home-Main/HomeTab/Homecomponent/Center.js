import "./Center.css";
import React, { useEffect, useState } from 'react';
import AddPostForm from "../../Home-post/AddPost";
import profilePic from "./profile.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faChevronRight, faPaperPlane, faThumbsUp, faImage, faPenToSquare, faRepeat, faVideo, faX, faComment } from "@fortawesome/free-solid-svg-icons";
import RenderNews from "../../Home-post/RenderNews/RenderNews";
import Comment from "../../Home-post/RenderNews/Comment";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../../firebase";

const Center = (props) => {

    function PostList({ posts }) {

        const [likes, setLikes] = useState(0);
        const [comments, setComments] = useState([]);
        const [showComments, setShowComments] = useState(false);
        const [user, setUser] = useState('Loading...');

        const handleCommentSubmit = (text) => {
            if (!text || text.trim() === "") {
                return;
            }
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

        useEffect(() => {
            const listen = auth.onAuthStateChanged((user) => {
                if (user) {
                    setUser(user.displayName || 'Vishal Kumar');
                } else {
                    setUser('Loading');
                }
            });
            return () => {
              listen();
            };
          }, []);

      

        return (
            <div className="RenderPost">
                {posts.map(post => (
                    <div key={post.id}>
                        <div className="one-one">
                            <div className="two">
                                <div className="two-one">
                                    <img src={profilePic} alt="Vishal" />
                                </div>
                                <div className="two-two">
                                    <h5>{user}</h5>
                                    <h6>10,440 followers</h6>
                                </div>
                            </div>
                            <div className="two-three"><FontAwesomeIcon className="shareIcon22" icon={faChevronRight} /></div>
                        </div>
                        <div className="three">
                            <p className="three-one">{post.body}</p>
                        </div>
                        <div className="four">
                            {post.image && <img src={URL.createObjectURL(post.image)} alt="post" />}
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
                                                <p className="commentsboxtext" key={index}><img className="commentsimage" src={profilePic} alt="image" />{comment.text}</p>
                                            </div>
                                        ))}
                                        <Comment onSubmit={handleCommentSubmit} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    const [posts, setPosts] = useState([]);
    const addPost = newPost => {
        newPost.id = Date.now();
        setPosts([...posts, newPost]);
    };

    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="CenterContentBox">
            <div className="Center">
                <div className="fixed">
                    <div className="scrolling">
                        <p>
                            <a href="#">Hiring in a hurry ?</a>&nbsp;
                            Find talented pros in record time with Upwork
                        </p>
                    </div>
                    <div className="AddPost">
                        <div className="Addpostincoming">
                            <div className="firstRow">
                                <div className="firstrowImage"><img src={profilePic} alt="" /></div>
                                <div className="firstrowButton"><button onClick={togglePopup}>&nbsp;&nbsp;&nbsp;Share a post</button></div>
                            </div>
                            <div className="secondRow">
                                <div className="Button1"><button><FontAwesomeIcon className="shareIcon1" icon={faImage} />Photo</button></div>
                                <div className="Button2"><button><FontAwesomeIcon className="shareIcon2" icon={faVideo} />Video</button></div>
                                <div className="Button3"><button><FontAwesomeIcon className="shareIcon3" icon={faCalendarDays} />Event</button></div>
                                <div className="Button4"><button><FontAwesomeIcon className="shareIcon4" icon={faPenToSquare} />Write article</button></div>
                            </div>
                        </div>
                        {isOpen && (
                            <div class="popup-overlay">
                                <div class="popup">
                                    <button class="popup-close" onClick={togglePopup}><FontAwesomeIcon icon={faX} /></button>
                                    <div className="createpostcenter">
                                        <AddPostForm addPost={addPost} isOpen={isOpen} setIsOpen={setIsOpen}/>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {!props.show &&
                    <div className="Container-center">
                        <div className="center-box">
                            <div className="ShareBox">
                                <PostList posts={posts} />
                                <div className="Fetchfeed">
                                    <RenderNews />
                                </div>
                            </div>
                        </div>
                    </div>}
                {/* {props.show && <div className="Container-center">
                    <div className="center-box">
                        <div className="ShareBox">
                            <p>vishal</p>
                        </div>
                    </div>
                </div>} */}
            </div>

        </div>
        // </div>
    )
}
export default Center;