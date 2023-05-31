import "./Rightside.css";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleInfo
} from "@fortawesome/free-solid-svg-icons";
import News from "../../Home-post/News";
import logo from "./logobackremoved.png"

const Rightside = () => {

    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        setVisible(!visible);
    };
    const [maxHeight, setMaxHeight] = useState('160px');
    const toggleHeight = () => {
        if (maxHeight === '160px') {
            setMaxHeight('400px');
        } else {
            setMaxHeight('160px');
        }
    };
    return (
        <div className="RightContentBox">
            <div className="rightSide">
                <div className="Newsbox">
                    <div className="Container-right" style={{ maxHeight }}>

                        <h5>Linkedin News&nbsp;&nbsp;&nbsp;<FontAwesomeIcon onClick={toggleVisibility} className="headericon5" icon={faCircleInfo} />
                            {visible && <div className="hideonbutton"><p>Used an API from my JS project to display news.</p></div>}</h5>
                        <div className="Fetched-news">
                            <News />
                        </div>

                    </div>
                    <button className="btn1" onClick={toggleHeight}>
                        {maxHeight === '160px' ? 'See More' : 'See Less'}
                    </button>
                </div>
                <div className="Newsbox-one">
                    <span>Account</span><span>Accessibility</span>
                    <span>Help Center</span><br /><span>Privacy & Terms</span><span>Advertising</span><br /><span>Get the LinkedIn Clone App</span>
                    <div className="Newsbox-one-one"><img src={logo} alt="logo" /> <span>LinkedIn Clone © 2023</span></div>
                </div>
            </div>
        </div>
    )
}
export default Rightside;