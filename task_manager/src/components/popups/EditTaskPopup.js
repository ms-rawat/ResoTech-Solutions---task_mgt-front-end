import { Button, Modal } from '@mui/material'
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import '../app.css'
import UpdateData from '../useContext/UpdateData';



function EditTaskPopup({ Data }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)
    const { EditAlertSetter } = useContext(UpdateData)

    let SendData = async (values) => {
        try {
            fetch(`http://localhost:8000/api/notes//update/${Data._id}`,
                {
                    method: 'put',
                    headers: {
                        "Authorization": "Basic bW9oYXI6cGFzc3dvcmQ=",
                        'Content-Type': 'application/json', // Set the content type if applicable
                    },
                    body: JSON.stringify(values)
                }).then(res => {
                    if (res.ok) {
                        let element = document.querySelector('.message');
                        element.innerHTML = "task updated"
                        EditAlertSetter(Math.random())
                    }
                })
        }
        catch (error) {
            let element = document.querySelector('.message');
            element.innerHTML = "error"
        }
    }

    const formik = useFormik(
        {
            initialValues: {
                title: Data.title,
                content: Data.content,
                last_date: Data.last_date,
                status: Data.status
            },
            onSubmit: (values) => {

                SendData(values)

            }
        }
    )
    return (
        <div>
            <Button onClick={handleOpen} title='edit task'><EditIcon /></Button>

            <div className='flex main-container   mx-auto mt-28'>

                <Modal
                    open={open}
                    onClose={handleClose}


                >

                    <form className='absolute top-1/2 left-1/2 p-6  bg-slate-800 w-11/12 md:w-fit lg:w-fit' style={{ transform: 'translate(-50%, -50%)' }} onSubmit={formik.handleSubmit}>
                         <div flex flex-col relative >
                         <div className='absolute top-2 right-2'>
                                <Button onClick={handleClose}><CloseOutlinedIcon /></Button>
                            </div>
                        <div className='flex flex-col gap-3  items-center flex-grow '>
                            <h1 className='quote'> Edit TasK</h1>
                            
                           

                            <div className="title flex flex-col">
                                <label className='text-slate-300' htmlFor="title">Title</label>
                                <input
                                    
                                    name='title'
                                    placeholder="Title"
                                    value={formik.values.title}
                                    onChange={formik.handleChange}

                                />
                            </div>
                            <div>
                                <select name="status" onChange={formik.handleChange} value={formik.values.status}>
                                    <option value='InComplete'>Status of Task</option>
                                    <option value="Completed">Completed</option>
                                    <option value="InComplete">InComplete</option>
                                </select>
                            </div>
                            <div className="last_date flex flex-col">
                                <label className='text-slate-300' htmlFor="title">Due Date</label>
                                <input
                                    className='last_date'
                                    type='date'
                                    name='last_date'
                                    placeholder="Last Date"
                                    value={formik.values.last_date}
                                    onChange={formik.handleChange}

                                />
                            </div>
                            <div className="description flex flex-col">
                                <label className='text-slate-300' htmlFor="content">description</label>
                                <textarea
                                    rows="8" cols="80"
                                    name='content'
                                    placeholder="Desscrition"
                                    value={formik.values.content}
                                    onChange={formik.handleChange}

                                ></textarea>
                            </div>
                            <div className="message"></div>
                            <div className='self-center button'><Button type='submit' variant='contained'> submit</Button></div>
                        </div>
                        </div>
                    </form>
                </Modal>

            </div>
        </div>
    )
}

export default EditTaskPopup