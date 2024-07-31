import { useState } from "react";
import DataService from "../../api/DataService";
import { Fade } from "react-reveal";


export const Post = ({ posts, totalCount, setPosts }) => {
    const postsPerPage = 10;
    const totalPages = Math.ceil(totalCount / postsPerPage);
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1); // Изменить, чтобы было через useMemo
    const [currentPage, setCurrentPage] = useState(1)

    const changePage = async (p) => {
        setCurrentPage(p)
        const nextPage = await DataService.getCurrentPage(postsPerPage, p)
        setPosts(nextPage)
    }

    return (
        <div>
            {posts.map(post => (
                <Fade left>
                    <div className="item-style">
                        <h3>{post.id}. {post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                </Fade>
            ))}
            <div>
                {pages.map(page => (
                    <button className={page === currentPage ?
                        'current-page-enable' : 'current-page-disable'
                    }
                        onClick={() => changePage(page)}>{page}</button>
                ))}
            </div>

        </div>


    )
}