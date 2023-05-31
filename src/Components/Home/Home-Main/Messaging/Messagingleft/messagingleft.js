import "./messagingleft.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPenToSquare,
    faMagnifyingGlass,
    faArrowRight
} from "@fortawesome/free-solid-svg-icons";

const MessagingLeft = () => {
    const [selectedMessage, setSelectedMessage] = useState(null);

    const handleSelectMessage = (id) => {
        setSelectedMessage(id);
        // console.log(setSelectedMessage);
    };

    const [message, setMessage] = useState([]);
    useEffect(() => {
        const fetchMessage = async () => {
            const response = await axios.get('https://6415426e4f32ca329191ef50.mockapi.io/api/posts/users');
            setMessage(response.data.slice(0, 1));
        };
        fetchMessage();
    }, []);
    return (
        <div className="containerMessL">
            <div className="messagecontent">
                <div className="messageboxone">
                    <div className="messageboxonetitle"><span>Messaging</span><span><FontAwesomeIcon className="jobsicons" icon={faPenToSquare} /></span></div>
                    <div className="messageboxoneseacrh">
                        <div className="searchM">
                            <input type="text" placeholder="Search" />
                            <FontAwesomeIcon className="iconMessage" icon={faMagnifyingGlass} />
                        </div>
                    </div>
                    <div className="messageboxonefetched">
                        {message.map((user) => (
                            <div key={user.id} className="messagebox">
                                <div className="messageboxlogo">< img src={user.profile} alt="avatar" />
                                </div>
                                <div className="actualmessage">
                                    <div className="messageboxtitle">
                                        <div>{user.name}</div>
                                        <div>{user.dateago}h ago</div>
                                    </div>
                                    <div className="messageboxmessage"><b>Sponsored</b>{user.content}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="messageboxtwo">
                    {message.map((user) => (
                        <>
                            <div className="messageboxtwoname">{user.name}</div>
                            <div className="messageboxtwooccu">{user.Occupation}</div>
                            <div className="messageboxtwodate"><span>Sponsored</span><span>{user.dateago}h ago</span></div>
                            <div className="selectedMessageContent">
                                <div className="selectedMessageContentlogo">
                                    < img src={user.profile} alt="avatar" />
                                </div>
                                <div className="selectedMessageContentpara">
                                    <h5>{user.name}</h5>
                                    <p>{user.content}</p>
                                    <button>Apply now <FontAwesomeIcon className="jobsicons" icon={faArrowRight} /></button>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default MessagingLeft;