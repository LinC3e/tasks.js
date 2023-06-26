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

module.exports = {
    getTasks,
}