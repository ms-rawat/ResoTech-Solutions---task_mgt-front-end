import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <div >
                <h1 className='Header flex text-3xl my-5 text-indigo-900 mx-auto items-center  justify-center'> Task Manager</h1>
            </div>
            <div className='navbar flex flex-row-reverse m-3'>

                <Button variant='contained'><Link to='./insert'>add task</Link></Button>

            </div>
        </div>
    )
}

export default Header