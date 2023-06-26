const express = require('express')
const tasksRoutes = express.Router()

const isAuthenticated = require('../middlewares/isAuthenticated')
const { test } = require('../controllers/tasks')

tasksRoutes.get('/tasks', isAuthenticated , test)

module.exports = tasksRoutes