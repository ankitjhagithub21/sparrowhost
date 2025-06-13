import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addSlide } from "../app/slices/appSlice"

const CreateImageComparisonSlide = () => {
  const dispatch = useDispatch();
  const initialData = {
    realImageUrl: '',
    fakeImageUrl: '',
    title: '',
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
      type: "image",
      content
    }
    dispatch(addSlide(newSlide));

    alert("Image comparison slide added.")
    setContent(initialData)

  }

  return (
    <div className='max-w-xl mx-auto p-5 shadow-xl rounded-xl'>
      <h2 className="mb-5 text-2xl">Add Image Comparison Slide</h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3'>

        <input type="text" id='title' value={content.title} onChange={handleChange} className='p-3 rounded-lg border-2 border-gray-300' name='title'
          placeholder='Enter  title' required />
        <textarea name="description" id="description" value={content.description} onChange={handleChange} placeholder='Enter description' rows={5} className='p-3 rounded-lg border-2 border-gray-300 resize-none' required></textarea>
        <input type="url" placeholder='Enter real image url' name='realImageUrl' value={content.realImageUrl} id='realImageUrl' className='p-3 rounded-lg border-2 border-gray-300' onChange={handleChange} required />
        <input type="url" placeholder='Enter real image url' id='fakeImageUrl' name='fakeImageUrl' value={content.fakeImageUrl} className='p-3 rounded-lg border-2 border-gray-300' onChange={handleChange} required />
        <button type='submit' 
        className='p-3 rounded-lg text-white bg-green-600 hover:bg-green-700'>Submit</button>

      </form>
    </div>
  )
}

export default CreateImageComparisonSlide