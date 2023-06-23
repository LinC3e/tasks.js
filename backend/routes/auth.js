const express = require('express')
const authRoutes = express.Router()

const { register, login, logout, profile } = require('../controllers/auth')

authRoutes.post('/register', register)
authRoutes.post('/login', login)
authRoutes.post('/logout', logout)
// USER
authRoutes.get('/profile', profile)

module.exports = authRoutes