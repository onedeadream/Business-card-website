import React from "react"

class Info extends React.Component {

    render() {
        const {residents, age, email, phone} = this.props.user;

        return (
            <div className="info">
                <h3>Возраст: </h3><p>{age}</p>
                <h3>Страна проживания: </h3><p>{residents}</p>
                <h3>Почта: </h3><p>{email}</p>
                <h3>Телефон: </h3><p>{phone}</p>
            </div>
            
        )
    }
}

export default Info