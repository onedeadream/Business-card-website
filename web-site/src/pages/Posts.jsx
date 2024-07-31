import React, { useEffect, useState } from "react"
import DataService from "../api/DataService"
import { Post } from "../components/posts/Post"

export const Posts = () => {
    const [posts, setPosts] = useState([])
    const [loader, setLoader] = useState(false)
    const [totalCount, setTotalCount] = useState(0)
    console.log(totalCount)


    async function fetchData() {
        setLoader(true)
        const data = await DataService.getAll()
        const page = await DataService.getCurrentPage()
        setTotalCount(data.lenght)
        setPosts(page)
        setLoader(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="post-block">
            <p>{loader ? 'Загрузка...' : posts.length === 0 ?
                'Посты не существуют' : <Post posts={posts} totalCount={totalCount} setPosts={setPosts} />}</p>
        </div>
    )
}