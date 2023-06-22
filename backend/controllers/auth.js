const User = require("../models/User")

const register = async (req, res) => {
    const { email, password, username } = req.body

    console.log(email, password, username)

    try {
        const newUser = new User({ username, email, password })
        newUser.password = await newUser.passwordEncrypt(password)
        const userSaved = await newUser.save()
        
        res.json({
            id: userSaved._id,
            email: userSaved.email,
            username: userSaved.username,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt
        })

    } catch (error) {
        console.log(error)
    }

}

const login = (req, res) => {
    res.send('Login')
}

module.exports = {
    register,
    login
}