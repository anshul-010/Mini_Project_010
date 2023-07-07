import React from 'react'
import { Home } from '../Pages/Home'
import { Sidebar } from '../Pages/Sidebar'

export const LandingPage = () => {
  return (
    <div style={{display:"flex",gap:"20px"}} >
        <Sidebar/>
        <Home/>
    </div>
  )
}
