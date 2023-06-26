const express = require('express')
const tasksRoutes = express.Router()

const isAuthenticated = require('../middlewares/isAuthenticated')
const { test } = require('../controllers/tasks')

tasksRoutes.get('/tasks', isAuthenticated, )
tasksRoutes.get('/tasks/:id', isAuthenticated, )
tasksRoutes.post('/tasks', isAuthenticated, )
tasksRoutes.delete('/tasks/:id', isAuthenticated, )
tasksRoutes.put('/tasks/:id', isAuthenticated, )

module.exports = tasksRoutes