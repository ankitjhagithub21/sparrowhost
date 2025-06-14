import { Routes, Route } from 'react-router-dom'
import "./App.css"
import Home from './pages/Home'
import Slider from './pages/Slider'
import TrainingModules from './pages/TrainingModules'
import AddTrainingModule from './pages/AddTrainingModule'
import Sidebar from './components/Sidebar'
const App = () => {
  return (
    <div className='flex h-screen w-full'>
      <Sidebar />
      <section className='flex-1 p-5 overflow-y-scroll'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-training-module" element={<AddTrainingModule />} />
          <Route path="/training-modules" element={<TrainingModules />} />
          <Route path="/training-preview/:id" element={<Slider />} />
        </Routes>
      </section>
    </div>
  )
}

export default App