import axios from './axios'

const service = {
  StatusAPI() {
    return axios.get('/')
  },
  PostUser(name, email, password) {
    return axios.post('/users/', name, email, password)
  },
  LoginUser(email, password) {
    return axios.post('/auth/sign-in',email, password )
  },
  PostShortLink(url, userId) {
    return axios.post('/short/', url, userId)
  },
  GetRank() {
    return axios.get('/short/rank')
  },  
  ListUser() {
    return axios.get('/short/me/list')
  },
  DelShort(shortId) {
    return axios.post('/short/', shortId)
  },
  PutShort(shortId, url) {
    return axios.put('/short/', shortId, url)
  },
  RedirectUrl(shortUrl) {
    return axios.post(`/short/${shortUrl}`, shortUrl)
  },
}

export default service