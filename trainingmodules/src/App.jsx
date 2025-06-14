import {Routes,Route} from 'react-router-dom'
import "./App.css"
import Home from './pages/Home'
import Slider from './pages/Slider'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/training-module/:id" element={<Slider/>}/>
    </Routes>
  )
}

export default App