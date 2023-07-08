import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionType";
import axios from "axios"

export const loginReqAction =()=>{
  return {type:LOGIN_REQUEST}
}
export const loginSuccessAction =(payload)=>{
  return {type:LOGIN_SUCCESS,payload}
}
export const loginErrorAction =()=>{
  return {type:LOGIN_FAILURE}
}

export const login = (loginObj)=> (dispatch) => {
  dispatch(loginReqAction())
  return (axios.post(`https://reqres.in/api/login`,loginObj)
  .then((res)=>{
    dispatch(loginSuccessAction(res.data.token))
    console.log(res.data)
  })
  .then((err)=>{
    dispatch(loginErrorAction())
  }))

};



// https://reqres.in/api/login