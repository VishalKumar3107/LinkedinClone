import "./jobsmain.css";
import JobsLeft from "../Jobs/Jobsleft/Jobsleft";
import JobsCenter from "../Jobs/JobsCenter/JobsCenter";
import Jobsright from "../Jobs/JobsRight/Jobsright";
const JobsMain = (props) => {

    return (
        <div className="Main-Box">
            <div className="content-main">
                <JobsLeft/>
                <JobsCenter/>
                <Jobsright />
            </div>
        </div>

    );
}
export default JobsMain;