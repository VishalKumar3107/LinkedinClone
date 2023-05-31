import React, { useState } from 'react';
import profilePic from "./profile.png";
import "./AddPost.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faImage, faPenToSquare, faVideo } from "@fortawesome/free-solid-svg-icons";


export default function AddPostForm({ addPost, isOpen, setIsOpen }) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [image, setImage] = useState('');
    const [video, setVideo] = useState('');
    // const [event, setEvent] = useState({});

    const handleSubmit = e => {
        e.preventDefault();
        const newPost = {
            title: title,
            body: body,
            image: image,
            video: video,
        };
        addPost(newPost);
        setTitle('');
        setBody('');
        setImage('');
        setVideo('');
        setIsOpen(false)
    };

    return (
        <div className="Addpost1">
            <form className="addpostMain" onSubmit={handleSubmit}>
                <div className="postingpost1">
                    <div className="PostRow1">
                        <div><textarea placeholder="Share a post" value={body} onChange={e => setBody(e.target.value)}></textarea></div>
                    </div>
                    <br />
                    <div className="PostRow2">
                        <div className="posticon1">
                            <label for="image-upload">
                                <div class="upload-icon"><FontAwesomeIcon className="shareIcon1-1" icon={faImage} />Photo</div>
                                <input id="image-upload" type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} />
                            </label>
                        </div>
                        <div className="posticon1">
                            <label for="image-upload">
                                <div class="upload-icon"><FontAwesomeIcon className="shareIcon2-1" icon={faVideo} />Video</div>
                                <input id="video-upload" type="file" accept="video/*" onChange={e => setVideo(e.target.files[0])} />
                            </label>
                        </div>
                        <div className="posticon1">
                            <label for="image-upload">
                                <div class="upload-icon"><FontAwesomeIcon className="shareIcon3-1" icon={faCalendarDays} />Event</div>
                                {/* <input id="image-upload" type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} /> */}
                            </label>
                        </div>
                        <div className="posticon1">
                            <label for="image-upload">
                                <div class="upload-icon"><FontAwesomeIcon className="shareIcon4-1" icon={faPenToSquare} />Write article</div>
                                {/* <input id="image-upload" type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} /> */}
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="addpostButton1" type="submit">Add Post</button>
                </div>
            </form>
        </div>
    );
}