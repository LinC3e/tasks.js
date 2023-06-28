const express = require('express')
const tasksRoutes = express.Router()

const isAuthenticated = require('../middlewares/isAuthenticated')
const { getTasks, createTask, deleteTask, updateTask, oneTask } = require('../controllers/tasks')

tasksRoutes.get('/tasks', isAuthenticated, getTasks)
tasksRoutes.get('/tasks/:id', isAuthenticated, oneTask )
tasksRoutes.post('/tasks', isAuthenticated, createTask )
tasksRoutes.delete('/tasks/:id', isAuthenticated, deleteTask)
tasksRoutes.put('/tasks/:id', isAuthenticated, updateTask)

module.exports = tasksRoutes