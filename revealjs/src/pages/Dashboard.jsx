import { useState } from "react"
import CreateQuizSlide from "../components/CreateQuizSlide"
import CreateVideoSlide from "../components/CreateVideoSlide"
import CreateImageComparisonSlide from "../components/CreateImageComparisonSlide"

const Dashboard = () => {
  const slideTypes = ["quiz","video","image"] 
  const [type,setType] = useState(slideTypes[0])
  return (
    <div>
     <div className="mt-20">
       <h2 className="text-3xl text-center">Create Slide</h2>
      <div className="flex items-center gap-5  p-5">
        <button onClick={()=>setType('quiz')} className="bg-gray-800 px-4 py-2 cursor-pointer text-white rounded-lg">Quiz Slide</button>
        <button onClick={()=>setType('video')} className="bg-gray-800 px-4 py-2 cursor-pointer text-white rounded-lg">Video Slide</button>
        <button onClick={()=>setType('image')} className="bg-gray-800 px-4 py-2 cursor-pointer text-white rounded-lg">Image comarision Slide</button>
      </div>
     </div>
      <section>
       {
         type === 'quiz' && <CreateQuizSlide/>
       }
         {
         type === 'video' && <CreateVideoSlide/>
       }
         {
         type === 'image' && <CreateImageComparisonSlide/>
       }
      </section>
    </div>
  )
}

export default Dashboard