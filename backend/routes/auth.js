const express = require('express')
const authRoutes = express.Router()

const { register, login, logout, profile } = require('../controllers/auth')
const isAuthenticated = require('../middlewares/isAuthenticated')
// validators
const validateSchema = require('../middlewares/validator')
const { registerSchema, loginSchema } = require('../validators/authSchema')

authRoutes.post('/register', validateSchema(registerSchema) ,register)
authRoutes.post('/login', validateSchema(loginSchema),login)
authRoutes.post('/logout', logout)
// USER
authRoutes.get('/profile', isAuthenticated ,profile)

module.exports = authRoutes