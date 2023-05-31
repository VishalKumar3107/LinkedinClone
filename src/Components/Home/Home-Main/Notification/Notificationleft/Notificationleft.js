import "./Notificationleft.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Notificationleft = () => {
    const [notification, setNotification] = useState([]);
    useEffect(() => {
        const fetchNotification = async () => {
            const response = await axios.get('https://6415426e4f32ca329191ef50.mockapi.io/api/posts/users');
            setNotification(response.data.slice(0, 5));
        };
        fetchNotification();
    }, []);
    return (
        <div className="containerNL">
            <div className="notificationcontent">
                {notification.map((user) => (
                    <div key={user.id} className="notificationbox">
                        <div className="notificationcontentimg">< img src={user.profile} alt="avatar" /></div>
                        <div className="notificationcontentcontent">{user.content}</div>
                        <div className="notificationcontentbutton"><span>{user.dateago}m ago</span></div>
                    </div>
                ))}
            </div>
            <div className="notificationfooter">
                <span>Manage your Notifications</span>
                <span>View Settings</span>
                </div>
        </div>
    )
}
export default Notificationleft;