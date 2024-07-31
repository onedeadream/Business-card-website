import React, { useState, useMemo } from "react"
import TextArea from "./TextArea"
import ButtonSend from './ButtonSend'
import Likes from "./Likes"
import { FaSortAlphaDown } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";

const Comments = () => {

    const options = { 
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };

    // Состояние для комментариев
    const [comments, setComments] = useState([{
        time: new Date('2021-03-23'),
        info: 'xxx'
    },
    {
        time: new Date('2021-02-22'),
        info: 'zzzz'
    }
])
    // Состояние для текста комментария 
    const [text, setText] = useState('')

    const [sortType, setSortType] = useState(null)

    const [searchText, setSearchText] = useState('')

    const sortedComments = useMemo(() => {
        if (sortType === 'info') {
            return [...comments].sort((a, b) => a.info.localeCompare(b.info));
        } else if (sortType === 'time') {
            return [...comments].sort((a, b) => a.time - b.time);
        } else {
            return comments;
        }
    }, [comments, sortType]);

    const searchList = useMemo(() => {
        return sortedComments.filter(comments => comments.info.toLowerCase().includes(searchText))
    }, [sortedComments, searchText])


    // Обработчик событий по нажатию на кнопку сортировки по содержанию комментария
    const sortByInfo = () => {
        setSortType('info')
    }
    // Обработчик событий по нажатию на кнопку сортировки по времени
    const sortByTime = () => {
        setSortType('time')
    }

    // Обработчик событий по нажатию на кнопку "Отправить"
    const addComment = (event) => {
        // Чтобы нажатию на кнопку не перезагружалась страница
        event.preventDefault()
        if (text) {
            // Создается новый объект, хранящий в себе текст введеный пользователем
            const newComment = {
                time: new Date(),
                info: text,
            }
            setComments([...comments, newComment])
            setText('')
            console.log(comments)
        } 
        else alert('Комментарий пуст')
    }

    return (
        <aside>
            <div className="header-container">
                <h1>Комментарии</h1>
                <button onClick={sortByInfo} className="sort-button"><FaSortAlphaDown/></button>
                <button onClick={sortByTime} className="sort-button"><IoTimeOutline/></button>
            </div>
            <input value={searchText} onChange={e => setSearchText(e.target.value)} placeholder="Поиск..." style={{padding: 10}}></input>
            <div className="comment">
                {searchList.map(comment => (
                    <div>
                        <p style={{color: 'blue'}}>User</p>
                        <p>{comment.info}</p>
                        <p style={{color: 'grey'}}>{comment.time.toLocaleString('ru-RU', options)}</p>
                        <Likes />
                    </div>
                ))}
            </div>
            <form className="formComment">
                <TextArea value={text} onChange={e => setText(e.target.value)} />
                <ButtonSend onClick={addComment} />
            </form>
        </aside>
    )
}

export default Comments