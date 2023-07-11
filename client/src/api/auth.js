import axios from 'axios'

const API = 'http://localhost:2121/api'

export const registerReq = user => axios.post(`${API}/register`, user)

export const loginReq = user => axios.post(`${API}/login`, user)