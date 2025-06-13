import "./App.css"
import {Routes,Route} from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Slider from "./pages/Slider"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Slider/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
  )
}

export default App