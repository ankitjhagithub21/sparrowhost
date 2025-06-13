import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addSlide } from "../app/slices/appSlice"
const CreateVideoSlide = () => {
    const dispatch = useDispatch();
    const initialData = {
        title: '',
        videoUrl: '',
        description: ''
    }
    const [content, setContent] = useState(initialData)

    const handleChange = (e) => {
        const { name, value } = e.target;

        setContent({
            ...content,
            [name]: value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newSlide = {
            id: new Date().getTime(),
            type: "video",
            content
        }
        dispatch(addSlide(newSlide));
        
        alert("Video slide added.")
        setContent(initialData)

    }

    return (
        <div className='max-w-xl mx-auto p-5 shadow-xl rounded-xl'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3'>

                <input type="text" id='title' value={content.title} onChange={handleChange} className='p-3 rounded-lg border-2 border-gray-300' name='title'
                    placeholder='Enter video title' required />
                <textarea name="description" id="description" value={content.description} onChange={handleChange} placeholder='Enter video description' rows={5} className='p-3 rounded-lg border-2 border-gray-300 resize-none' required></textarea>
                <input type="url" placeholder='Enter video url' value={content.videoUrl} className='p-3 rounded-lg border-2 border-gray-300' onChange={handleChange} required />
                <button className='p-3 rounded-lg text-white bg-green-600 hover:bg-green-700'>Submit</button>

            </form>
        </div>
    )
}

export default CreateVideoSlide