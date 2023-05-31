import "./Mynetworkmain.css";
import Networkleft from "../MyNetwork/MyNetworkleft/networkleft";
import Networkright from "../MyNetwork/MyNetworkright/networkright";
const Mynetworkmain = (props) => {

    return (
        <div className="Main-Box">
            <div className="content-main">

                <Networkleft />
                <Networkright />

            </div>
        </div>

    );
}
export default Mynetworkmain;