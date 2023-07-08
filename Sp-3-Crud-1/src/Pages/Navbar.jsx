import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {styled} from "styled-components"
import { store } from '../redux/store'


export const Navbar = () => {
    const isAuth = useSelector((store)=>store.authReducer.isAuth)
    const links = [
        {
            path:'/',
            title:'Home'
        },
        {
            path:'/login',
            title:isAuth?"Logout":"Login"
        },
        {
            path:'/admin',
            title:"Admin"
        }
    ]

    return(
        <DIV className = "navbar"  >
            {links.map((link)=>(
                <Link className='links' to={link.path} key={link.path}>{link.title}</Link>
            ))}
            
        </DIV>
    )
}

const DIV = styled.div`
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    display: flex;
    justify-content: space-around;
    height: 50px;
    align-items: center;
    border-radius: 10px;
    
    .links{
        color:#000080;
        text-decoration: none;
        font-weight: bolder;
        font-size: x-large;
    }
    .links:hover{
        text-decoration: underline;
    }
`