const jwt = require('jsonwebtoken')

const isAuthenticated = (req, res, next) => {
    const { token } = req.cookies
    
    if (!token) {
        return res.status(401).json({ message: 'No token, need to log in.'})
    }
    
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token.'})
        }

        req.user = user
        next()
    })
}

module.exports = isAuthenticated