import "./messagingright.css";
import logo from "../logobackremoved.png";

const Messagingright = () => {
    return (
        <div className="containerMessR">
            <span>Account</span><span>Accessibility</span>
            <span>Help Center</span><br /><span>Privacy & Terms</span><span>Advertising</span><br /><span>Get the LinkedIn Clone App</span>
            <div className="containerMessRimage"><img src={logo} alt="logo" /> <span>LinkedIn Clone © 2023</span></div>
        </div>
    )
}
export default Messagingright;