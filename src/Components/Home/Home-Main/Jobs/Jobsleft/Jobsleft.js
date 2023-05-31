import "./Jobsleft.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faBookmark,
   faBell,
   faTasks,
   faNoteSticky,
   faBuildingUser,
   faGear,
   faVideo,
   faPenToSquare,
   faRocket, 
} from "@fortawesome/free-solid-svg-icons";

const JobsLeft = () => {
    return (
        <div className="containerJL">
            <div className="Jobstags">
                <p><FontAwesomeIcon className="jobsicons" icon={faBookmark} />My jobs</p>
                <p><FontAwesomeIcon className="jobsicons" icon={faBell} />Job alert</p>
                <p><FontAwesomeIcon className="jobsicons" icon={faTasks} />Skill Assessments</p>
                <p><FontAwesomeIcon className="jobsicons" icon={faNoteSticky} />Interview prep</p>
                <p><FontAwesomeIcon className="jobsicons" icon={faBuildingUser} />Resume Builder</p>
                <p><FontAwesomeIcon className="jobsicons" icon={faVideo} />Job seeker guidance</p>
                <p><FontAwesomeIcon className="jobsicons" icon={faGear} />Application settings</p>
            </div>
            <div className="postjob">
                <button><FontAwesomeIcon className="jobsicons" icon={faPenToSquare} />Post a free job &nbsp;<FontAwesomeIcon className="jobsicons" icon={faRocket} /></button>
            </div>
        </div>
    )
}
export default JobsLeft;