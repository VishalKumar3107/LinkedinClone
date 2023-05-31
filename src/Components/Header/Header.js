import "./Header.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from "../images//squareLogo.png";
import profile from "../images//profile.png";
import arrow from "../images//arrowdown.png";
import Home from "../Home/Home";
import {
    faMagnifyingGlass,
    faHouse,
    faBell,
    faEnvelope,
    faBriefcase,
    faUserGroup,
    faBoxOpen,
} from "@fortawesome/free-solid-svg-icons";
import Loader from "./Loader";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

const Header = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState('Loading...');


    useEffect(() => {
        const listen = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user.displayName || 'Vishal Kumar');
            } else {
                setUser('Loading...');
            }
        });
        return () => {
          listen();
        };
      }, []);


    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const [showNavbar, setShowNavbar] = useState(false);
    const toggleNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    const handlesignOut = () => {
        signOut(auth)
          .then(() => {
            console.log("Signout Successfully");
            navigate('/')
          })
          .catch(() => {
            console.log("Signout Failed");
          });
      };
    

    const navigate = useNavigate();

    const [home, setHome] = useState(true)
    const [network, setNetwork] = useState(false)
    const [job, setJob] = useState(false)
    const [notify, setNotify] = useState(false)
    const [message, setMessage] = useState(false)

    const handleHomeClick = () => {
        setNetwork(false)
        setHome(true)
        setJob(false)
        setNotify(false)
        setMessage(false)
    }

    const handleNetworkClick = () => {
        // alert('nav')
        setNetwork(true)
        setHome(false)
        setJob(false)
        setNotify(false)
        setMessage(false)
    }

    const handleJobsClick = () => {
        // console.log('vvv')
        // alert('sam')
        setNetwork(false)
        setHome(false)
        setJob(true)
        setNotify(false)
        setMessage(false)
    }

    const handleMessageClick = () => {
        // console.log('vvv')
        // alert('sam')
        setNetwork(false)
        setHome(false)
        setJob(false)
        setNotify(false)
        setMessage(true)
    }

    const handleNotificationClick = () => {
        // console.log('vvv')
        // alert('sam')
        setNetwork(false)
        setHome(false)
        setJob(false)
        setNotify(true)
        setMessage(false)
    }
    // const [showHome, setShowHome] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    // if (!user || !user.displayName) {
    //     return <div>Loading...</div>; 
    // }
    
    return (
        <>
            {isLoading ? ( 
                <div className="loader"><Loader/></div>
            ) : (
                <div className="ContainerHeader">
                    <div className="HeaderH">
                        <div className="containerH">
                            <div className="contentH">
                                <div className="leftH">
                                    <div className="logoH">
                                        <Link to={'/header'}>
                                        <img onClick={handleHomeClick} src={logo} alt="logo" />
                                        </Link>
                                    </div>
                                    <div className="searchH">
                                        <input type="text" placeholder="Search" />
                                    </div>
                                    <div className="iconH">
                                        <FontAwesomeIcon className="headericonH" icon={faMagnifyingGlass} />
                                    </div>
                                </div>
                                <div class="toggle-btn" onClick={toggleNavbar}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className={`rightH ${showNavbar ? 'show' : ''}`}>
                                    <div className="navitemsH">
                                        <div className="navlist"  >
                                            <div className="itemsH" onClick={handleHomeClick} >
                                                <a>
                                                    <FontAwesomeIcon icon={faHouse} />
                                                    <span>Home</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="navlist">
                                            <div className="itemsH" onClick={handleNetworkClick}>
                                                <a>
                                                    <FontAwesomeIcon icon={faUserGroup} />
                                                    <span>My Network</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="navlist">
                                            <div className="itemsH" onClick={handleJobsClick}>
                                                <a>
                                                    <FontAwesomeIcon icon={faBriefcase} />
                                                    <span>Jobs</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="navlist">
                                            <div className="itemsH" onClick={handleMessageClick}>
                                                <a>
                                                    <FontAwesomeIcon icon={faEnvelope} />
                                                    <span>Messaging</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="navlist">
                                            <div className="itemsH" onClick={handleNotificationClick}>
                                                <a>
                                                    <FontAwesomeIcon icon={faBell} />
                                                    <span>Notifications</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="navlistH">
                                            <div className="itemsH">
                                                <a onClick={toggleDropdown}>
                                                    <img className="dp" src={profile} alt="logo" />
                                                    <span>
                                                        Me <img src={arrow} alt="logo" />
                                                    </span>
                                                    {isOpen && (
                                                        <div className="dropdown">
                                                            <div className="viewdropdown">
                                                                <div className="viewproflilel">
                                                                    <div className="leftflex">
                                                                        <img className="dp2" src={profile} alt="logo" />
                                                                    </div>
                                                                    <div className="rightflex">
                                                                        {user}
                                                                        <button>View Profile</button>
                                                                    </div>
                                                                </div>
                                                                <div className="viewAccount">
                                                                    <p className="H"><b>Account</b>
                                                                        <p>Settings and Privacy</p>
                                                                        <p>Language</p>
                                                                        <p>Help</p>
                                                                    </p>
                                                                    <button onClick={handlesignOut}>Sign Out</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </a>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="navlistH">
                                            <div className="itemsH">
                                                <a>
                                                    <FontAwesomeIcon className="headericon" icon={faBoxOpen} />
                                                    <span>Work
                                                    </span>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="toggle-btn" onClick={toggleNavbar}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Home home={home} message={message} network={network} job={job} notify={notify} />
                </div>)}
        </>
    )
}

export default Header;