import axios from 'axios'


const instance = axios.create({
    baseURL: "http://localhost:4000/http://localhost:8080/twitter/api"
})

export default instance