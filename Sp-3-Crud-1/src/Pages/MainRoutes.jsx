import React from 'react'
import {Route, Routes} from "react-router-dom"
import { Home } from './Home'
import { Admin } from './Admin'
import { Login } from './Login'
import { LandingPage } from '../components/LandingPage'
import { PrivateRoute } from '../components/PrivateRoute'

export const MainRoutes = () => {
  return (

    <div>
        
        <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='/admin' element={<PrivateRoute><Admin/></PrivateRoute>}/>
            <Route path='/login' element={<Login/>} />
        </Routes>
    </div>
  )
}
