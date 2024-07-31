import React from "react"
import { FaTwitter } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { RiInstagramFill } from "react-icons/ri";

class About extends React.Component {

    render() {
        const { fullName, profession } = this.props.user;

        return (
            <div className="right-side-header">
                <h1>{fullName}</h1>
                <h3>{profession}</h3>
                <div className="links">
                    <a href="https://x.com/"><FaTwitter size={25}/></a>
                    <a href="https://vk.com/cloudchazer"><SlSocialVkontakte size={25}/></a>
                    <a href="https://www.instagram.com/"><RiInstagramFill size={25}/></a>
                </div>
            </div>
            
        )
    }
}

export default About