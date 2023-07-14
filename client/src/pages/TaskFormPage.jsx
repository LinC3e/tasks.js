import { useForm } from 'react-hook-form'

function TaskForm() {

    const { register, handleSubmit } = useForm()

    const onSubmit = handleSubmit((data) => {
        console.log(data)
    })

    return (
        <div className='h-[calc(100vh-100px)] flex items-center justify-center'>
            <div className='bg-zinc-800 max-w-md w-full p-16 rounded-md'>
                <h1 className="text-center font-bold">Create Task</h1>
                <form onSubmit={onSubmit}>
                    <input className='w-full bg-zinc-700 text-white px-4 py-2 rounded my-2'
                        type="text"
                        placeholder="Title"
                        {...register('title')}
                        autoFocus />

                    <textarea className='w-full bg-zinc-700 text-white px-4 py-2 rounded my-2'
                        rows="3"
                        placeholder="Description"
                        {...register('description')}>
                    </textarea>

                    <button type='submit' className='my-2 bg-zinc-700 hover:bg-black text-white font-bold py-2 px-4 rounded'>Save</button>
                </form>
            </div>
        </div>
    )
}
export default TaskForm