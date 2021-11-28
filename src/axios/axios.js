import axios from 'axios'

const baseURL = 'https://jsonplaceholder.typicode.com/todos'

const mainInstance = axios.create({
    baseURL: baseURL,
})

export { mainInstance }
