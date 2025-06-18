import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='h-screen w-[250px] bg-gray-800 text-white flex flex-col  gap-5 justify-center  pl-3'>
        <Link to={"/"}>Home</Link>
        <Link to={"/training-modules"}>Traing Modules</Link>
        <Link to={"/add-training-module"}>Add New Training Module</Link>
    </div>
  )
}

export default Sidebar