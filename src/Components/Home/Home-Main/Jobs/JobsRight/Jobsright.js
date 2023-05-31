import "./Jobsright.css";
import logo from "./logobackremoved.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const Jobsright = () => {
    return (
        <div className="containerJR">
            <div className="jobsrightone">
                <p><b>Job seeker guidance</b><br />Recommended based on your activity</p>
                <div className="jobsrightonecenter">
                    <a>I want to improve my resume.</a>
                </div>
                <p>Explore our curated guide of expert-led courses, such as how to improve your resume and grow your network, to help you land your next opportunity.</p>
                <button>Show more <FontAwesomeIcon className="jobsicons" icon={faArrowRight} /></button>
            </div>
            <div className="jobsrighttwo">
            <span>Account</span><span>Accessibility</span>
                <span>Help Center</span><br /><span>Privacy & Terms</span><span>Advertising</span><br /><span>Get the LinkedIn Clone App</span>
                <div className="jobsrighttwoimage"><img src={logo} alt="logo" /> <span>LinkedIn Clone © 2023</span></div>
            </div>
        </div>
    )
}
export default Jobsright;