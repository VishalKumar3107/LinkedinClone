import "./Home.css";
import Main from "./Home-Main/HomeTab/Main";

const Home = (props) => {
    return (
        <div className="homeContainer">
            <div className="allinone">
                <Main home={props.home} message={props.message} network={props.network} job={props.job} notify={props.notify} />
            </div>
        </div>
    )
}
export default Home;