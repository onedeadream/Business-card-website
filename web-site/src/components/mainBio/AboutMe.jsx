import React from "react"

class AboutMe extends React.Component {

    render() {
        const bio = this.props.user.bio;

        return (
            <div className="about-me">
                <h1>Обо мне</h1>
                <p>{bio}</p>
            </div>
            
        )
    }
}

export default AboutMe