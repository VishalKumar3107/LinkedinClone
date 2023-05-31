import "./networkleft.css";
import logo from "./logobackremoved.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faContactBook,
   faPeopleGroup,
   faPerson,
   faUserGroup,
   faCalendar,
   faPager,
   faNewspaper,
   faHashtag, 
} from "@fortawesome/free-solid-svg-icons";

const Networkleft = () => {
    return (
        <div className="containerN">
            <div className="firstBoxN">
                <h4>Manage my network</h4>
                <p><FontAwesomeIcon className="networkicons" icon={faUserGroup} />Connections</p>
                <p><FontAwesomeIcon className="networkicons" icon={faContactBook} />Contacts</p>
                <p><FontAwesomeIcon className="networkicons" icon={faPerson} />Following & Followers</p>
                <p><FontAwesomeIcon className="networkicons" icon={faPeopleGroup} />Groups</p>
                <p><FontAwesomeIcon className="networkicons" icon={faCalendar} />Events</p>
                <p><FontAwesomeIcon className="networkicons" icon={faPager} />Pages</p>
                <p><FontAwesomeIcon className="networkicons" icon={faNewspaper} />Newsletters</p>
                <p><FontAwesomeIcon className="networkicons" icon={faHashtag} />Hastags</p>
            </div>
            <div className="secondBoxN">
                <span>Account</span><span>Accessibility</span>
                <span>Help Center</span><br /><span>Privacy & Terms</span><span>Advertising</span><br /><span>Get the LinkedIn Clone App</span>
                <div className="secondBoxNimage"><img src={logo} alt="logo" /> <span>LinkedIn Clone © 2023</span></div>
            </div>
        </div>
    )
}
export default Networkleft;