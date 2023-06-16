const mongoose = require("mongoose")

const dbConnection = async () => {

    try {
        await mongoose.connect(process.env.DB_LOCAL_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('| DB Connected |')

    } catch (error) {
        console.log('| DB connection error |')
        console.error(error)
    }
}

module.exports = {
    dbConnection
}