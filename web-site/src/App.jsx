import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './pages/Profile'
import { Posts } from './pages/Posts'
import Header from './components/Header'


const App = () => {

    return (
        
        <BrowserRouter>
            <div>
                <Header/>
            </div>
            <Routes>
                <Route path="/" element={<Profile />}/>
                <Route path="/posts" element={<Posts />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
