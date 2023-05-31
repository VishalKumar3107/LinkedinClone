import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUser,
    faCompass,
    faChalkboardUser,
    faBriefcase,
    faBars
} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.png";
import googleicon from "../images/google-icon.png";
import background from "../images/4565.jpg";
import "./Page.css";
import SignUp from "./Signup";
import Login from "./Login";

const Page = () => {

    const [showOptions, setShowOptions] = useState(false);
    function handleToggleOptions() {
        setShowOptions(!showOptions);
    }

    const [showLogin, setShowLogin] = useState(true);
    const [showSignup, setShowSignup] = useState(false);

    const handleLoginClick = () => {

        setShowSignup(false);
        setShowLogin(true);
    };

    const handleSignupClick = () => {
        setShowLogin(false);
        setShowSignup(true);
    };


    return (
        <div className="login-container">
            <div className="Header1">
                <div className="logo1">
                    <img src={logo} alt="logo" />
                </div>

                <div className="optionBox">
                    <div className={`options ${showOptions ? 'show' : 'hide'}`}>
                        <span className="icon-text">
                            <FontAwesomeIcon icon={faCompass} />
                            <span>Discover</span>
                        </span>
                        <span className="icon-text">
                            <FontAwesomeIcon icon={faUser} />
                            <span>People</span>
                        </span>
                        <span className="icon-text">
                            <FontAwesomeIcon icon={faChalkboardUser} />
                            <span>Learning</span>
                        </span>
                        <span className="icon-text">
                            <FontAwesomeIcon icon={faBriefcase} />
                            <span>Jobs</span>
                        </span>
                    </div>
                </div>

                <div className="button">
                    <button className="toggle-options" onClick={handleToggleOptions}><FontAwesomeIcon icon={faBars} /></button>
                    <button className="btn1" onClick={handleSignupClick}>Join Now</button>
                    <button className="btn2" onClick={handleLoginClick}>Sign In</button>
                </div>
            </div>

            <div className="Body">
                <div className="subHeading">Welcome to your professional community</div>
                <div className="BoxContainer">
                    <div className="Box1">
                        {showLogin && <Login />}
                        {showSignup && <SignUp />}
                    </div>
                    <div className="Box2">
                        <img className="boximage" src={background} alt="box" />
                    </div>
                    <div className="googlebutton">
                    <button className="SignInGoogleButton"><img  src={googleicon} alt="box" />Sign in with Google</button>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Page;