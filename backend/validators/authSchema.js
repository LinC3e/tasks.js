const z = require('zod')

const registerSchema = z.object({
    username: z.string({
        required_error: "Username is required."
    }).min(3, "Username must be more than 3 characters")
        .max(15, "Username must be less than 15 characters.").trim(),

    email: z.string({
        required_error: "Email is required"
    }).email({
        message: "Email invalid."
    }).trim(),

    password: z.string({
        required_error: "Password is required.",
    }).min(5, "Username must be more than 5 characters")

})

const loginSchema = z.object({
    email: z.string({
        required_error: "Email is required"
    }).email({
        message: "Email invalid."
    }).trim(),

    password: z.string({
        required_error: "Password is required.",
    }).min(5, "Username must be more than 5 characters")
})

module.exports = {
    registerSchema,
    loginSchema
}