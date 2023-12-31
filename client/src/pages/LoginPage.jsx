import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext"
import { Link, useNavigate } from "react-router-dom" 
import { useEffect } from "react"

function LoginPage() {

    const { register, handleSubmit, formState: {errors} } = useForm()
    const { signin , errors: signinErrors, isAuthenticated } = useAuth()
    const navigate = useNavigate()

    const onSubmit = handleSubmit(data => {
        signin(data)
    })

    useEffect(() => {
        if(isAuthenticated) navigate('/tasks')
    }, [isAuthenticated])

    return (
        <div className='h-[calc(100vh-100px)] flex items-center justify-center'>
            <div className="bg-zinc-800 max-w-md w-full p-16 rounded-md">
                
            {
                signinErrors.map((error, i) => (
                    <div className='bg-red-500 my-2 p-2' key={i}> {error} </div>
                ))
            }

                <h2 className="text-center font-bold">Login Form</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="email" placeholder="email@example.com"  {...register("email", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md" />

                    {
                        errors.email && (
                            <p className="text-red-500">Email is required.</p>
                        )
                    }

                    <input type="password" {...register("password", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md" />
                    
                    {
                        errors.password &&(
                            <p className="text-red-500">Password is required.</p>
                        )
                    }

                    <div className="flex justify-end">
                        <button type='submit' className='my-2 bg-zinc-700 hover:bg-black text-white font-bold py-2 px-4 rounded'>Login</button>
                    </div>

                    <p className="flex gap-x-2 justify-stretch">
                        Dont have an account? <Link to="/register" className="text-sky-500">Sign up</Link>
                    </p>

                </form>
            </div>
        </div>
    )
}
export default LoginPage