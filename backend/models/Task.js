const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref:'User', required: true },
    date: { type: Date, default: Date.now },
}, { timestamps: true })

module.exports = mongoose.model('Task', taskSchema)