import React from "react"
import { Link } from "react-router-dom"

const Header = (props) => {
    return (
        <header className="header">
            <h3>{props.title}</h3>
            <Link to='/'>Профиль</Link>
            <Link to='/posts'>Посты</Link>
        </header>
    )
}

export default Header