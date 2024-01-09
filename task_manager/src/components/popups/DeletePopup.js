import { Button, Modal } from "@mui/material"
import { useContext, useState } from "react"

import DeleteIcon from '@mui/icons-material/Delete';
import UpdateData from "../useContext/UpdateData";



export default function DeletePopups({id}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)
      const {updateItemToBeDeleted}=useContext(UpdateData);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        
        p: 4,
    };


    const DeleteTask = async (id) => {
     
        await fetch(`http://localhost:8000/api/notes/${id}`, {
            method: 'delete',
            headers: {
                "Authorization": "Basic bW9oYXI6cGFzc3dvcmQ="

            },
        }).then(res => {
            if (res.ok) {
                handleClose()
                updateItemToBeDeleted(id)             
              
            }
        })


    }

    return (
        <div>
            <Button title='delete task' onClick={handleOpen}><DeleteIcon /></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-describedby="modal-modal-description"

            >

                <div  style={ style } className=' popup bg-slate-800 text-slate-100 p-5 rounded-md '>
                    <div className="m-3 mb-7 text-2xl" style={{  'letter-spacing': '2px','font-family':'Quicksand'}}>are you sure?</div>
                    <div className="flex flex-row gap-5 mx-2">
                        <Button variant="outlined"  onClick={() => DeleteTask(id)} > <h5 className="text-slate-100 font-sans text-2xl">yes</h5></Button>
                        <Button   variant="outlined" onClick={handleClose}><h5 className="text-slate-100 font-sans text-2xl">no</h5></Button>
                    </div>

                </div>
            </Modal>
        </div>
    )
}


