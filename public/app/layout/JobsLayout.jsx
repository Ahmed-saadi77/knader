import React from 'react'
import { Outlet } from 'react-router-dom'

const JobsLayout = () => {
    return (
        <div>
            <h2>Jobs openings </h2>
            <p> list of companies job </p>
            <Outlet />
        </div>
    )
}

export default JobsLayout