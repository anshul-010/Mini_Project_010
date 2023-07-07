import React from 'react'
import { Home } from '../Pages/Home'
import { Sidebar } from '../Pages/Sidebar'

export const LandingPage = () => {
  return (
    <div style={{display:"flex"}} >
        <Sidebar/>
        <Home/>
    </div>
  )
}
