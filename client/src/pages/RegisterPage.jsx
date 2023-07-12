import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'

function RegisterPage() {

    const { register, handleSubmit, formState: {
        errors
    } } = useForm()
    const { signup, isAuthenticated, errors: registerErrors } = useAuth()
    const navigate = useNavigate()

    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    })

    useEffect(() => {
        if (isAuthenticated) navigate("/tasks");
    }, [isAuthenticated]);

    return (
        <div className='h-[calc(100vh-100px)] flex items-center justify-center'>
            <div className="bg-zinc-800 max-w-md w-full p-16 rounded-md">

                {
                    registerErrors.map((error, i) => (
                        <div className='bg-red-500 my-2 p-2' key={i}> {error} </div>
                    ))
                }

                <h2 className="text-center font-bold">Register Form</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Username" {...register("username", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md" />

                    {errors.username?.message && (
                        <p className="text-red-500">{errors.username?.message}</p>
                    )}

                    <input type="email" placeholder="email@example.com"  {...register("email", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md" />

                    {errors.email?.message && (
                        <p className="text-red-500">{errors.email?.message}</p>
                    )}

                    <input type="password" placeholder='password' {...register("password", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md" />

                    {errors.confirmPassword?.message && (
                        <p className="text-red-500">{errors.confirmPassword?.message}</p>
                    )}

                    <div className="flex justify-end">
                        <button type='submit' className='my-2 bg-zinc-700 hover:bg-black text-white font-bold py-2 px-4 rounded'>Register</button>
                    </div>

                    <p className="flex gap-x-2 justify-stretch">
                        Already have an account? <Link to="/login" className="text-sky-500">Sign up</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage