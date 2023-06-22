const mongoose = require("mongoose")
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, min: 3, max: 15, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
}, { timestamps: true })

userSchema.methods.passwordEncrypt = async (password) => {
    const salt = await bcrypt.genSalt(10) // Semmilla para luego encryptar
    return await bcrypt.hash(password, salt)
}

userSchema.methods.checkPassword = async function ( password ) { // true o false
    return await bcrypt.compare(password, this.password)
}


module.exports = mongoose.model('User', userSchema)