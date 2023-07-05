import { useForm } from 'react-hook-form'
import { registerReq } from '../api/auth'

function RegisterPage() {

    const { register, handleSubmit } = useForm()

    const onSubmit = handleSubmit(async (values) => {
        const res = await registerReq(values)
        console.log(res)
    })

    return (
        <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Username" {...register("username", { required: true } )}
                    className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"/>

                <input type="email" placeholder="email@example.com"  {...register("email", { required: true } )}
                    className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"/>

                <input type="password"  {...register("password", { required: true } )} 
                    className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"/>

                <button type='submit' className='my-2'>Register</button>
            </form>
        </div>
    )
}

export default RegisterPage