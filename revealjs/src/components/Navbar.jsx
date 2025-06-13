
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-gray-600 text-white flex gap-5 z-50 p-5 fixed w-full top-0'>
        <Link to={"/"}>Home</Link>
        <Link to={"/dashboard"}>dashboard</Link>
    </div>
  )
}

export default Navbar