const register = (req,res) => {
    const { email, password, username } = req.body

    console.log(email,password,username)

    res.send('Register')
}

const login = (req,res) => {
    res.send('Login')
}

module.exports = {
    register,
    login
}