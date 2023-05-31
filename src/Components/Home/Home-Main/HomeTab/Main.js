import "./Main.css";
import { useState } from "react";
import Leftside from "./Homecomponent/Leftside";
import Rightside from "./Homecomponent/Rightside";
import Center from "./Homecomponent/Center";
import Networkleft from "../MyNetwork/MyNetworkleft/networkleft";
import Networkright from "../MyNetwork/MyNetworkright/networkright";
import JobsLeft from "../Jobs/Jobsleft/Jobsleft";
import JobsCenter from "../Jobs/JobsCenter/JobsCenter";
import Jobsright from "../Jobs/JobsRight/Jobsright";
import MessagingLeft from "../Messaging/Messagingleft/messagingleft";
import Messagingright from "../Messaging/Messagingright/messagingright";
import Notificationleft from "../Notification/Notificationleft/Notificationleft";
import Notificationright from "../Notification/Notificationright/Notificationright";

const Main = (props) => {

    return (
        <div className="Main-Box">
            <div className="content-main">

                {props.home &&
                    <>
                        <Leftside />
                        <Center />
                        <Rightside />
                    </>
                }

                {props.network &&
                    <>
                        <Networkleft />
                        <Networkright />
                    </>
                }


                {props.job &&
                    <>
                        <JobsLeft />
                        <JobsCenter />
                        <Jobsright />
                    </>
                }

                {props.message &&
                    <>
                        <MessagingLeft />
                        <Messagingright />
                    </>
                }

                {props.notify &&
                    <>
                        <Notificationleft />
                        <Notificationright />
                    </>
                }

            </div>
        </div >

    );
}

export default Main;