import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className=' w-full  flex justify-center   p-4'>
            <ul className='p-3 rounded-full border-2 flex gap-10 '>
                <NavLink to="/" ><li>Home</li></NavLink>
                <NavLink to="/products"><li>Products</li></NavLink>
                <NavLink to="/about"><li>About</li></NavLink>
                <NavLink to="/contact"><li>Contact</li></NavLink>
                <NavLink to="/jobs"><li>Jobs</li></NavLink>
            </ul>
            <button className='px-10' onClick={() => navigate('/about', { replace: true })}>Get started</button>
        </div>
    )
}

export default Navbar