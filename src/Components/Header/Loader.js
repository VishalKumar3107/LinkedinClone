import "./Loader.css";
import logoimg from "./logobackremoved.png";

const Loader = () => {
    return (
        <div className="Loadercontainer">
            <div className="Loaderimage">
                <img src={logoimg} alt="loder" />
            </div>
            <div className="loader">
                <div className="big-line"></div>
                <div className="small-line"></div>
            </div>
        </div>
    )
}
export default Loader;