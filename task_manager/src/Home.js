import React, { useEffect, useState } from 'react'
import TaskItem from './components/TaskItem'
import Header from './components/Header'
import UpdateData from './components/useContext/UpdateData';

function Home() {
  const [Data, setData] = useState([]);
  const [ItemToBeDeleted,setItemToBeDeleted]=useState('');
  
  const updateItemToBeDeleted = (id) => {
    setItemToBeDeleted(id);
  };




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
        console.log("data could not fetched")
      }

    }
    catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchTask()
  }, [])

  useEffect(()=>{
     console.log("from home : "+ItemToBeDeleted)
    const dummyData =Data.filter(item=>item._id!==ItemToBeDeleted)
    setData(dummyData)


  },[ItemToBeDeleted])
  return (
    <div>
      <Header />
      <UpdateData.Provider value={{ItemToBeDeleted,updateItemToBeDeleted}}>
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