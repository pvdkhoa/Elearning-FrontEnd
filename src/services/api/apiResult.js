import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `https://elearning-english.onrender.com/api/result`
  })
}