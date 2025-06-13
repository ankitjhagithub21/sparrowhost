import { useState } from "react"
import { useDispatch } from "react-redux";
import { addSlide } from "../app/slices/appSlice"

const CreateQuizSlide = () => {
  
  const initialState = {
    'question': '',
    'options': ['', '', '', ''],
    'correctAnswer': 0
  }
  
  const [content, setContent] = useState(initialState); 
  
  const dispatch = useDispatch()
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Handle options array updates
    if (name.startsWith('option')) {
      const optionIndex = parseInt(name.replace('option', '')) - 1;
      const newOptions = [...content.options];
      newOptions[optionIndex] = value;
      
      setContent({
        ...content,
        options: newOptions
      });
    } else if (name === 'correctAnswer') {
      // Convert to number for correctAnswer
      setContent({
        ...content,
        [name]: parseInt(value)
      });
    } else {
      // Handle other fields (question)
      setContent({
        ...content,
        [name]: value
      });
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const newSlide = {
      id: new Date().getTime(),
      type: 'quiz',
      content
    }
    dispatch(addSlide(newSlide))
    
    // Reset form after submission
    setContent(initialState);
    alert("Quiz Slide added.")
  }
  
  return (
    <div className="max-w-xl mx-auto shadow-xl rounded-xl p-5">
      <h2 className="mb-5 text-2xl">Add Quiz Slide</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input 
          type="text" 
          id="question" 
          className='p-3 rounded-lg border-2 border-gray-300' 
          name="question" 
          value={content.question} 
          onChange={handleChange} // Added missing onChange
          placeholder="Enter question" 
          required 
        />
        
        <div className="grid grid-cols-2 gap-2">
          <input 
            type="text" 
            id="option1" 
            placeholder="Enter option 1" 
            className='p-3 rounded-lg border-2 border-gray-300'
            value={content.options[0]} 
            name="option1" 
            onChange={handleChange} // Added missing onChange
            required 
          />
          <input 
            type="text" 
            id="option2"  
            placeholder="Enter option 2" 
            className='p-3 rounded-lg border-2 border-gray-300' 
            value={content.options[1]} // Added missing value
            name="option2" 
            onChange={handleChange} // Added missing onChange
            required 
          />
          <input 
            type="text" 
            id="option3"  
            placeholder="Enter option 3" 
            className='p-3 rounded-lg border-2 border-gray-300'  
            value={content.options[2]} // Added missing value
            name="option3" 
            onChange={handleChange} // Added missing onChange
            required 
          />
          <input 
            type="text" 
            id="option4"  
            placeholder="Enter option 4" // Fixed: was "Enter option 1"
            className='p-3 rounded-lg border-2 border-gray-300' 
            value={content.options[3]} // Added missing value
            name="option4" 
            onChange={handleChange} // Added missing onChange
            required 
          />
        </div>
        
        <input 
          type="number" 
          placeholder="Enter correct answer (0-3)" // More descriptive placeholder
          className='p-3 rounded-lg border-2 border-gray-300' 
          id="correctAnswer" 
          min={0} 
          max={3} 
          value={content.correctAnswer} // Added missing value
          name="correctAnswer" 
          onChange={handleChange} // Added missing onChange
          required 
        />
        
        <button 
          type='submit'  
          className='p-3 rounded-lg text-white bg-green-600 hover:bg-green-700'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default CreateQuizSlide