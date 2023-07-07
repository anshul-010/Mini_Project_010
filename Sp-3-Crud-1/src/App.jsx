import { useState } from 'react'
import './App.css'
import { Admin } from './Pages/Admin'
import { Login } from './Pages/Login'
import { Home } from './Pages/Home'
import { Sidebar } from './Pages/Sidebar'
import { Navbar } from './Pages/Navbar'
import { MainRoutes } from './Pages/MainRoutes'


function App() {
  
  return (
    <>
     <Navbar/>
     
    <MainRoutes/>
     <div className='home' >
     
     </div>
     
    </>
  )
}

export default App
