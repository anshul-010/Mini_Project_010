import React from 'react'
import {styled} from 'styled-components'

export const Login = () => {
  return (
    <DIV>
        <form action="">
            <input type="email" placeholder='email' />
            <input type="password" placeholder='password' />
            <input type="submit"/>
        </form>
    </DIV>
  )
}

const DIV = styled.div`
    display: flex;
    gap: 100px;
    border: 2px solid;
    flex-direction: column;
`