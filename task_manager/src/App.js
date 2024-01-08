import React from 'react'
import Home from './Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import InsertTask from './components/InsertTask'

function App() {
  const Router = createBrowserRouter([
    {
       path:'/insert',
      element: <InsertTask/>


    },
    {
      path:'/',
      element:<Home/>
    },
    

  ])
  return (
    <div>
      
      <RouterProvider router={Router}/>



    </div>
  )
}

export default App