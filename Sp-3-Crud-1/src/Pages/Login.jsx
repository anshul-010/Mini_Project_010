import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {styled} from 'styled-components'
import { login } from '../redux/AuthReducer/action';
import { useLocation, useNavigate } from 'react-router-dom';

export const Login = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function handleLogin(e){
    e.preventDefault()
    let loginObj = {
      email,
      password
    }
    dispatch(login(loginObj)).then(()=>{
      navigate(location.state,{replace:true})
    })
  }


  return (
    <DIV>
      <h2>Log in</h2>
        <form className='formLogin' onSubmit={handleLogin} >
            <input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
            <input type="submit" className='button' />
        </form>
    </DIV>
  )
}

const DIV = styled.div`
    
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 10px;
    height: 250px;
    width: 40%;
    margin: 100px auto;
    
    .formLogin{
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
    .formLogin>input{
      width: 45%;
      height: 35px;
      outline: none;
      font-size: larger;
     
    }

    .button{
      border: none;
      background-color: #020262;
      color: white;
      font-weight: bold;
      font-size: large;
      border-radius: 2px;
      letter-spacing: 2px;
    }

    h2{
      text-align: center;
    }
`