import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1 className='text-7xl'>Contact</h1>
            <div className='flex justify-between py-10'>
                <button className='border-2 bg-slate-500 text-white rounded-xl p-2' onClick={() => navigate('info')}>Contact info</button>
                <button className='border-2 bg-red-400 text-white rounded-xl p-2' onClick={() => navigate('form')}>Contact form</button>
            </div>
        </div>
    )
}

export default Contact