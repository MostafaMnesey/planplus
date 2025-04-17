import { useState } from 'react'

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Components/Login/Login'
const router =createBrowserRouter([ {
  path:'/'
  ,element:<Login/>
},])
function App() {
  
  return (
    <>
  <RouterProvider router={router}/>
     
    </>
  )
}

export default App
