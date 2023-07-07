import axios from "axios"
import { GET_PRODUCT_SUCCESS, POST_PRODUCT_FAILURE, POST_PRODUCT_REQUEST, POST_PRODUCT_SUCCESS } from "../actionType"

export const productReqAction =()=>{
  return {type:POST_PRODUCT_REQUEST}
}
export const productSuccessAction =()=>{
  return {type:POST_PRODUCT_SUCCESS}
}
export const productErrorAction =()=>{
  return {type:POST_PRODUCT_FAILURE}
}
export const  getProductSuccess=(payload)=>{
  return {type:GET_PRODUCT_SUCCESS,payload}
}


export const postProductData= (data)=>(dispatch)=>{
  
  dispatch(productReqAction())

  axios.post(`http://localhost:8080/men`,data)
  .then((res)=>{
    dispatch(productSuccessAction)
  })
  .catch((err)=>{
    dispatch(productErrorAction())
  })
}

export const fetchData = (paramObj)=> (dispatch)=>{
  dispatch(productReqAction())
  axios.get(`http://localhost:8080/men`,paramObj)
  .then((res)=>{
    dispatch(getProductSuccess(res.data))
    
  })
}

