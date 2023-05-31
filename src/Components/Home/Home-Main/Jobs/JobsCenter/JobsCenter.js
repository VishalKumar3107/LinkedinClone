import "./jobscenter.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBookmark,
} from "@fortawesome/free-solid-svg-icons";

const JobsCenter = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            const response = await axios.get('https://6415426e4f32ca329191ef50.mockapi.io/api/posts/users');
            setJobs(response.data);
            // console.log(fetchContacts);
        };
        fetchJobs();
    }, []);
    return (
        <div className="containerJC">
            <div className="ContainerJCmain">
                <h4>Recommended for you</h4>
                <p className="basedonn">Based on your profile and search history</p>
                <div className="jobsfetched">
                    {jobs.map((user) => (
                        <div key={user.id} className="jobseachbox">
                            <div className="jobseachboxlogo">< img src={user.profile} alt="background" /></div>
                            <div className="jobseachboxdetail">
                                <p className="jobstitleone"><b>{user.Occupation}</b></p>
                                <p className="jobstitletwo">{user.companyname}</p>
                                <p className="jobstitlethree">{user.Location}</p>
                                <p className="jobstitlethree">{user.dateago}h ago</p>
                            </div>
                            <div className="bookmarkicon"><FontAwesomeIcon className="jobsicons" icon={faBookmark} /></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default JobsCenter;