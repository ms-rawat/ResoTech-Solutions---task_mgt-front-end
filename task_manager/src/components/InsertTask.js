import { Button} from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'

function InsertTask() {
   

   let SendData=async(values)=>{
    try{
        fetch("http://localhost:8000/api/notes/create",
        {
            method:'post',
            headers: {
                "Authorization": "Basic bW9oYXI6cGFzc3dvcmQ=",
                'Content-Type': 'application/json', // Set the content type if applicable
              },
            body:JSON.stringify(values)
        }).then(res=>{
            if(res.ok)
            {  
                let element = document.querySelector('.message');
                element.innerHTML="task added"
            }
        })
    }
    catch(error){
        let element = document.querySelector('.message');
        element.innerHTML="error"
    }
   }

    const formik = useFormik(
        {
            initialValues:{
                title:'',
                content:'',
                last_date:'',
            },
            onSubmit:(values)=>{
               SendData(values)
            
            }
        }
    )
  return (
    <div>
        <div className='flex main-container   mx-auto mt-10 mb-5'>
           
            <form  onSubmit={formik.handleSubmit}>
                <div className='flex flex-col gap-3 w-fit items-center flex-grow '>
                <h1 className='quote'>
                Set goals, unlock your potential, and turn dreams into achievements.
            </h1>
                <div className="title flex flex-col">
                    <label htmlFor="title">Title</label>
                    <input
                      name='title'
                      placeholder="Title"
                      value={formik.values.title}
                      onChange={formik.handleChange}
                      
                    />
                </div>
                <div className="last_date flex flex-col">
                    <label htmlFor="title">Due Date</label>
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
                    <label htmlFor="content">description</label>
                <textarea
                       rows="5" cols="80"
                      name='content'
                      placeholder="Desscrition"
                      value={formik.values.content}
                      onChange={formik.handleChange}
                      
                    ></textarea>
                </div>
                <div className="message"></div>
                <div className='self-center button'><Button type='submit' variant='contained'><span style={{  letterSacing: '2px',fontFamily:'Quicksand'}} className='font-semibold '>submit</span> </Button></div>
                </div>
            </form>
           
        </div>
    </div>
  )
}

export default InsertTask