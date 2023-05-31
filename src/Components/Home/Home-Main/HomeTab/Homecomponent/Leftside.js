import "./Leftside.css";
import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faSquareUpRight,
    faBookmark,
    faPlus,
    faArrowUp,
    faArrowDown
} from "@fortawesome/free-solid-svg-icons";
import displaypic from "./profile.png";
import { UserContext } from "../../../../../UserContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../../firebase";


const Leftside = () => {
    const [visible, setVisible] = useState(false);
    const [user, setUser] = useState('Loading...');

    const toggleVisibility = () => {
        setVisible(!visible);
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
        <div className="LeftContentBox">
            <div className="leftSide">
                <div className="Container">
                    <div className="Background1">
                    </div>
                    <div className="Background2">
                        <center><img src={displaypic} alt="profile" /></center>
                        <center><h4>{user}</h4></center>
                        <center><h6>Web Developer</h6></center>
                    </div>
                    <div className="Profile">
                        <p>Connections <br /><b>Grow your network</b></p>
                    </div>
                    <div className="advertisement">
                        <p>Achieve your goals faster with Premium</p>
                        <a><FontAwesomeIcon className="headericon11" icon={faSquareUpRight} />&nbsp;&nbsp;&nbsp;Try Premium free + up to 25% of</a>
                    </div>
                    <div className="bookmark">
                        <a><FontAwesomeIcon className="headericon" icon={faBookmark} />&nbsp;&nbsp;&nbsp; <b>My items</b></a>
                    </div>
                </div>
                <div className="nextContainer">
                    <div >Groups</div>
                    <div className="sad">
                        <p>Events</p>
                        <p><FontAwesomeIcon icon={faPlus} /></p>
                    </div>
                    <div className="sad">
                        <p>Followed Hashtags</p>
                        <p>
                            {visible ? (
                                <FontAwesomeIcon onClick={toggleVisibility} icon={faArrowUp} />
                            ) : (
                                <FontAwesomeIcon onClick={toggleVisibility} icon={faArrowDown} />
                            )}</p>
                    </div>
                    {visible && <div className="hideonHashtags">
                        <p>#Reactjs</p>
                        <p>#HindustanTimes</p>
                        <p>#FrontendDeveloperJobs</p>
                        <p>#Nodejs</p>
                        <p>#Designer</p>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Leftside;