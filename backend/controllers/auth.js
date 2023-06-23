const bcrypt = require('bcrypt')

const User = require("../models/User")
const createAccessToken = require("../utils/jwt")

const register = async (req, res) => {
    const { email, password, username } = req.body

    try {
        const newUser = new User({ username, email, password })
        newUser.password = await newUser.passwordEncrypt(password)
        const userSaved = await newUser.save()

        const token = await createAccessToken({ id: userSaved._id })

        res.cookie('token', token)
        res.json({
            id: userSaved._id,
            email: userSaved.email,
            username: userSaved.username,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

const login = async (req, res) => {
    const { email, password } = req.body

    try {
        const userFound = await User.findOne({email})
        if(!userFound) return res.status(400).json({ message: 'User not found.' })

        const isMatch = await bcrypt.compare(password, userFound.password)

        if(!isMatch) return res.status(400).json({ message: 'Invalid password.' })

        const token = await createAccessToken({ id: userFound._id })

        res.cookie('token', token)
        res.json({
            id: userFound._id,
            email: userFound.email,
            username: userFound.username,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const logout = (req,res) => {
    res.cookie('token', "", {
        expires: new Date(0)
    })

    return res.status(200).json({ message: 'Logout succesfully.'})
}

const profile = (req,res) => {
    res.send('Profile')
}

module.exports = {
    register,
    login,
    logout,
    profile
}