import "./App.css"
import {Routes,Route} from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Slider from "./pages/Slider"
import TrainingModules from "./pages/TrainingModules"

const App = () => {
  return (
    <>
   
    <Routes>
      <Route path="/" element={<TrainingModules/>} />
      <Route path="/training-module/:id" element={<Slider/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
    </>
  )
}

export default App