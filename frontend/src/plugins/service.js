import axios from './axios';

const service = {
  StatusAPI() {
    return axios.get('/');
  },
  PostUser(name, email, password) {
    return axios.post('/users/', { name, email, password });
  },
  LoginUser(email, password) {
    return axios.post('/auth/sign-in', { email, password });
  },
  PostShortLink(url, userId) {
    return axios.post('/short/', { url, userId });
  },
  GetRank() {
    return axios.get('/short/rank');
  },  
  ListUser() {
    return axios.get('/short/me/list');
  },
  DelShort(shortId) {
    return axios.delete(`/short/${shortId}`);
  },
  PutShort(shortId, url) {
    return axios.put(`/short/`, { url, shortId });
  },
  RedirectUrl(shortUrl) {
    return axios.get(`/short/${shortUrl}`);
  },
};

export default service;