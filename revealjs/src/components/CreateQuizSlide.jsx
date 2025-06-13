import { useState } from "react"


const CreateQuizSlide = () => {
  const initialState = {
    'question':'',
    'options':['','','',''],
    'correctAnswer':0
  }
  const [content,setConent] = useState(initialState);

  return (
    <div className="max-w-xl mx-auto p-5">
          
    </div>
  )
}

export default CreateQuizSlide