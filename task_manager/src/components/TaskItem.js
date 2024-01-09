import './app.css'
import DeletePopup from './popups/DeletePopup';
import EditTaskPopup from './popups/EditTaskPopup';
import StatusOfTask from './StatusOfTask';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { useEffect, useState } from 'react';

function TaskItem({ Data }) {
  const [Status, setStatus] = useState(Data.status)




const Last_data=new Date(Data.last_date);
const current_date=new Date();


  let changeInStatus = () => {
    setStatus("Completed")

  }


  useEffect(() => {
    setStatus(Data.status)
  }, [Data])
  return (
    <div className='TaskItem font-semibold bg-slate-50  rounded-md flex flex-col border-2  p-3'>

      <div className='text-3xl'><h1>{Data.title}</h1></div>
      <hr className='my-3 border-1 border-slate-900 rounded-lg' />
     
      <div className='flex flex-row justify-between '>
        <div className='flex flex-row gap-3'><div><PendingActionsIcon /></div> <div>{Data.last_date}</div></div>
        { current_date>Last_data && (<div className='mr-0 md:mr-3 lg:mr-4 text-red-900' title='task is due' ><WarningAmberOutlinedIcon /></div>)}
      </div>
      <div className='flex flex-row  flex-grow gap-3'>
        <div><DescriptionOutlinedIcon /></div>
        <div> {Data.content}</div>

      </div>
      <div className=' button-group my-4  h-9 flex flex-row-reverse'>
        <DeletePopup id={Data._id} />
        <EditTaskPopup Data={Data} />
        {Status === "Completed" ? <div className='font-semibold underline font-mono text-green-950'>Completed</div> : <StatusOfTask id={Data._id} change={changeInStatus} />}


      </div>


    </div>
  )
}

export default TaskItem

