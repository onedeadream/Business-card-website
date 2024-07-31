import React, { useState } from "react"
import { IoHeartOutline, IoHeart } from "react-icons/io5";

const Likes = () => {
    // Состояние для отображение лайков
    const [likes, setLikes] = useState(false)
    // Функция, которая меняет предыдущее состояние на противоположное
    const addLikes = () => {
        setLikes(prevLikes => !prevLikes);
    }

    return (
        <div className="block-likes">
            {likes ? <IoHeart onClick={addLikes} className="likes-button" /> : <IoHeartOutline onClick={addLikes} className="likes-button" />}
            <p>{likes}</p>
        </div>
    )
}

export default Likes