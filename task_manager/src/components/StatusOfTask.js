import React from 'react'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { Button } from '@mui/material';

function StatusOfTask({id,change}) {
    let UpdateStatus=async()=>{
      change()

        try{
            fetch(`http://localhost:8000/api/notes//Status/${id}`,
            {
                method:'put',
                headers: {
                    "Authorization": "Basic bW9oYXI6cGFzc3dvcmQ=",
                    'Content-Type': 'application/json', // Set the content type if applicable
                  },
                body:JSON.stringify({"status":"Completed"})
            })
        }
        catch(error){
            let element = document.querySelector('.message');
            element.innerHTML="error"
        }
       }

  return (
    <div>
              <Button onClick={UpdateStatus} title='mark complete'><DoneAllIcon/></Button>

    </div>
  )
}

export default StatusOfTask