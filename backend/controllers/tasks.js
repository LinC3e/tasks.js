const Task = require("../models/Task")

// GET ALL TASKS
const getTasks = async (req,res) => {
    try {
        const tasks = await Task.find()
        res.status(200).json(tasks)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

// GET SPECIFIC TASK
const oneTask = async(req,res) => {
    try {
        const task = await Task.findById(req.params.id)
        res.status(200).json({
            title: task.title,
            description: task.description,
            date: task.date
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

// CREATE TASK
const createTask = async (req,res) => {
    try {
        const { title , description , date } = req.body

        const newTask = new Task({
            title,
            description,
            date,
            user: req.user.id
        })
        if(!newTask.user) return res.status(500).json({ message: 'User not log in.'})
        const savedTask = newTask.save()
        res.status(200).json({
            title,
            description,
            date
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

// DELETE TASK
const deleteTask = async(req,res) => {
    
    try {
        await Task.findByIdAndDelete(req.params.id )
        res.status(200).json({ message: 'Task deleted sucessfully!.'})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

// UPDATE TASK 
const updateTask = async(req,res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id  , { $set: req.body }, { new: true })
        res.status(200).json(updatedTask)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getTasks,
    oneTask,
    createTask,
    deleteTask,
    updateTask
}