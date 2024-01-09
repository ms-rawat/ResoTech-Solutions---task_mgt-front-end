import { Button } from '@mui/material'
import React from 'react'

function Header() {
    return (
        <div>
            <div >
                <h1 className='Header flex text-3xl my-5 text-indigo-900 mx-auto items-center  justify-center'> <a href="/">Task Manager</a></h1>
              
              
            </div>
            <div className='navbar  flex flex-row-reverse m-2 gap-2'>

                <Button title='add a new task' variant=''><a style={{  letterSpacing: '2px',fontFamily:'Quicksand'}} className=' font-semibold' href="/insert">add-task</a></Button>
                <Button title='home page' variant=''><a style={{  letterSpacing: '2px',fontFamily:'Quicksand'}} className=' font-semibold' href="/">Home</a></Button>

            </div>
        </div>
    )
}

export default Header