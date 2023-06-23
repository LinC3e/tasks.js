const express = require('express')
const authRoutes = express.Router()

const { register, login, logout, profile } = require('../controllers/auth')
const isAuthenticated = require('../middlewares/isAuthenticated')

authRoutes.post('/register', register)
authRoutes.post('/login', login)
authRoutes.post('/logout', logout)
// USER
authRoutes.get('/profile', isAuthenticated ,profile)

module.exports = authRoutes