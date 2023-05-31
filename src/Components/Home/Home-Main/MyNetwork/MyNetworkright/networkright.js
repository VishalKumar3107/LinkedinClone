import axios from "axios";
import { useEffect, useState } from "react";
import "./networkright.css";

const Networkright = () => {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            const response = await axios.get('https://6415426e4f32ca329191ef50.mockapi.io/api/posts/users');
            setContacts(response.data);
            // console.log(fetchContacts);
        };
        fetchContacts();
    }, []);
    return (
        <div className="containerNR">
            <div className="containerinnerbox">
                <h4>Recommended for you</h4>
                <div className="contactstofollow">
                    {contacts.map((user) => (
                        <div key={user.id} className="contactbox">
                            <div className="backcoverimage">
                            <div className="contactboxcover">< img src ={user.background} alt= "background" /></div></div>
                            <div className="contactboxprofile">< img src = {user.profile} alt = "avatar"/></div>
                            <div className="contactboxname"><b>{user.name}</b> <br/>{user.Occupation}</div>
                            <div className="contactboxfollowers">{user.followers} followers</div>
                            <div className="contactboxbutton"><button>Follow</button></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Networkright;