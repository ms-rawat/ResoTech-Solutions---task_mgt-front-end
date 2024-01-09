import React from 'react'
import Home from './Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import InsertTask from './components/InsertTask'
import Header from './components/Header'
import './App.css'

function App() {
  const Router = createBrowserRouter([
    {
      path: '/insert',
      element: <InsertTask />


    },
    {
      path: '/',
      element: <Home />
    },


  ])
  return (
    <div className='App' >
      <Header />
      <RouterProvider router={Router} />



    </div>
  )
}

export default App