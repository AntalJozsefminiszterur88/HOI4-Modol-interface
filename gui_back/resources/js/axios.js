import axios from 'axios'

const myAxios = axios.create({
  baseURL: 'http://localhost:8000/api', // adjust to your Laravel API root
  withCredentials: true, // include cookies if needed (for auth)
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
})

export default myAxios