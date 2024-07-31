import React, { useState } from "react"
import HeaderBio from "../components/mainBio/HeaderBio";
import Fade from "react-reveal";
import photo from '../img/photo.jpg'
import header_bio from '../img/header.jpg'
import AboutMe from '../components/mainBio/AboutMe'
import Info from "../components/mainBio/Info";
import Comments from "../components/comments/Comments";


const Profile = () => {
    const [user] = useState({
        fullName: 'Егор Щемеров',
        bio: 'Родился в городе Выборг, Ленинградской области. Обучался в СПБГУТ им. проф. М.А.Бонч-Бруевича на специальности "Программная инженерия" c 2020 по 2024 год. Являюсь Full-stack разработчиком, стек Python, React.js, HTML, CSS. В ходе обучения в вузе была написана выпускная квалификационная работа на тему "Разработка программного обеспечения для удаленного управления компьютерами", где был использован следующий стек: Python, PyQt, а также была использована технологий централизованной аутентификации OpenLDAP',
        image: photo,
        profession: 'Full-Stack разработчик',
        age: 22,
        email: 'schemerov8@mail.ru',
        residents: 'Россия, Ленинградская область',
        phone: '+7(955)348-58-44'
    })

    return (
        <Fade right>
            <div className="container">
                <div className="box">
                    <div className="header-bio">
                        <img src={header_bio} className="fon-header" alt="Шапка заголовка"></img>
                        <HeaderBio user={user} />
                        <div className="left-side-header">
                            <img src={photo} alt="Me"></img>
                        </div>
                    </div>
                    <div className="bio">
                        <AboutMe user={user} />
                        <Info user={user} />
                    </div>
                </div>
                <Comments />
            </div>
        </Fade>
    )
}

export default Profile