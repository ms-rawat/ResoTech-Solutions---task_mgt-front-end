import {Button  } from '@mui/material'
import './app.css'
import DeletePopup from './popups/DeletePopup';
import EditTaskPopup from './popups/EditTaskPopup';
import StatusOfTask from './StatusOfTask';
import {  useState } from 'react';

function TaskItem({Data}) {
  const [Status,setStatus]=useState(Data.status)
  console.log(Data.status)


let changeInStatus=()=>{
 setStatus("Complete")
  console.log("clicked")
}


   
  return (
    <div className='TaskItem font-semibold bg-slate-50  rounded-md flex flex-col border-2  p-3'>

        <div className='text-3xl'><h1>{Data.title}</h1></div>
        <hr className='my-3 border-1 border-slate-900 rounded-lg' />
        <div>warning icon </div>
        <div>{Data.last_date}</div>
        <div>
            {Data.content}
        </div>
        <div className='my-4  h-9 flex flex-row-reverse'>
               <DeletePopup id={Data._id}  />
               <EditTaskPopup Data={Data} />
            { Status==="Completed" ?   <div className='font-semibold underline font-mono text-green-950'>Completed</div>:<StatusOfTask id={Data._id} change={changeInStatus}/>}
            
           
        </div>
        

    </div>
  )
}

export default TaskItem

  