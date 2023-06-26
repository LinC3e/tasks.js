const Task = require("../models/Task")

const getTasks = async (req,res) => {
    try {
        const tasks = await Task.find()
        res.json(tasks)
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
            date
        })
        const savedTask = newTask.save()
        res.json({
            title,
            description,
            date
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getTasks,
    createTask
}