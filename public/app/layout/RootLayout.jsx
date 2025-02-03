import React from 'react'
import Navbar from '../app/components/Navbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <>

            <Navbar />
            <div className='flex justify-center py-10'>
                <Outlet />
            </div>
        </>
    )
}

export default RootLayout