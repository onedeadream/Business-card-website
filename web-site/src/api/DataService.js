import axios from 'axios'

export default class DataService {
    static async getCurrentPage(limit=10, page=1) {
        try { 
            const response = await axios.get(`http://127.0.0.1:8000/getPosts?limit=${limit}&page=${page}`) 
            return response.data
        } catch(e) {
            console.log(e)
        }
    }

    static async getAll() {
        try { 
            const response = await axios.get(`http://127.0.0.1:8000/getPosts`) 
            return response.data
        } catch(e) {
            console.log(e)
        }
    }

}