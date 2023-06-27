const Task = require("../models/Task")

const getTasks = async (req,res) => {
    try {
        const tasks = await Task.find()
        res.status(200).json(tasks)
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

const deleteTask = async(req,res) => {
    
    try {
        await Task.findByIdAndDelete(req.params.id )
        res.status(200).json({ message: 'Task deleted sucessfully!.'})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getTasks,
    createTask,
    deleteTask
}