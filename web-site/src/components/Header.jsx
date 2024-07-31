import React from "react"
import { Link } from "react-router-dom"
import Logo from '../img/icon.png'

const Header = () => {
    return (
        <header className="header">
            <img style={{width: '3%'}} src={Logo}/>
            <Link to='/' className="links-header">Профиль</Link>
            <Link to='/posts' className="links-header">Посты</Link>
        </header>
    )
}

export default Header