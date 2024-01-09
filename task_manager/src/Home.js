import React, { useEffect, useState } from 'react'
import TaskItem from './components/TaskItem'
import UpdateData from './components/useContext/UpdateData';
function Home() {
  const [Data, setData] = useState([]);
  const [ItemToBeDeleted,setItemToBeDeleted]=useState('');
  const [EditAlert,setEditAlert]=useState('')
  
  const updateItemToBeDeleted = (id) => {
    setItemToBeDeleted(id);
  };

  const EditAlertSetter=(value)=>{
    setEditAlert(value)
 
  }
  




  const fetchTask = async () => {

    try {
      const responce = await fetch('http://localhost:8000/api/notes/',
        {
          method: 'get',
          headers: {
            "Authorization": "Basic bW9oYXI6cGFzc3dvcmQ=",
          }
        })
      if (responce.ok) {
        setData(await responce.json())

      }
      else {
        document.write("data could not fetched")
      }

    }
    catch (error) {
      document.write(error)
    }
  }
  useEffect(() => {
    fetchTask()
  }, [EditAlert])

  useEffect(()=>{
    const dummyData =Data.filter(item=>item._id!==ItemToBeDeleted)
    setData(dummyData)


  },[ItemToBeDeleted])
  return (
    <div>
     
      <UpdateData.Provider value={{updateItemToBeDeleted,EditAlertSetter}}>
        <div className='flex flex-row  flex-wrap flex-grow gap-2 mx-auto justify-center'>
          {Data.map((item, index) => (
            < TaskItem key={index} Data={item} />
          ))}

        </div>
      </UpdateData.Provider>



    </div>
  )
}

export default Home