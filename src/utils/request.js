import axios from 'axios'

const service = axios.create({
  baseURL: 'www.baidu.com',
  timeout: 5000
})

export default service
