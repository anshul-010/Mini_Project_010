import { POST_PRODUCT_REQUEST, POST_PRODUCT_FAILURE, POST_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS } from "../actionType"


const initialState = {
    isLoading: false,
    isError: false,
    products: [],
  }

export const reducer =(state=initialState,{type,payload})=>{
    switch (type){
        case POST_PRODUCT_REQUEST:{
            return {...state,isLoading:true}
        }
        case POST_PRODUCT_SUCCESS:{
            return {...state,isLoading:false}
        }
        case POST_PRODUCT_FAILURE:{
            return {...state,isLoading:false,isError:true}
        }
        case GET_PRODUCT_SUCCESS:{
            return {...state,isLoading:false,products:payload}
        }
        default:{
            return state;
        }
    }
}