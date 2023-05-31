import "./Notificationright.css";
import logo from "../logobackremoved.png";

const Notificationright = () => {
    return (
        <>
        <div className="containerNR">
            <span>Account</span><span>Accessibility</span>
            <span>Help Center</span><br /><span>Privacy & Terms</span><span>Advertising</span><br /><span>Get the LinkedIn Clone App</span>
            <div className="containerNRimage"><img src={logo} alt="logo" /> <span>LinkedIn Clone © 2023</span></div>
        </div>
        </>
    )
}
export default Notificationright;