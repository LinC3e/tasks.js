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

const login = (req, res) => {
    res.send('Login')
}

module.exports = {
    register,
    login
}