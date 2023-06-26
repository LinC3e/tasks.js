const express = require('express')
const tasksRoutes = express.Router()

const isAuthenticated = require('../middlewares/isAuthenticated')
const { getTasks, createTask } = require('../controllers/tasks')

tasksRoutes.get('/tasks', isAuthenticated, getTasks)
tasksRoutes.get('/tasks/:id', isAuthenticated, )
tasksRoutes.post('/tasks', isAuthenticated, createTask )
tasksRoutes.delete('/tasks/:id', isAuthenticated, )
tasksRoutes.put('/tasks/:id', isAuthenticated, )

module.exports = tasksRoutes