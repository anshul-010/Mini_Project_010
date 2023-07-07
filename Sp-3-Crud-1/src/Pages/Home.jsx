import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../redux/store'
import { fetchData } from '../redux/productReducer/action'
import {styled} from "styled-components"
import "../CSS/home.css"

export const Home = () => {

    const dispatch = useDispatch()
    const data = useSelector((store)=>store.productReducer.products)
    // console.log("home",data)

    useEffect(()=>{
        dispatch(fetchData)
    },[])

  return (
      <DIV>
        <div><h1>Home</h1></div>
        <div className='container'  >
        {data?.map((item)=>{
            return <div className='cart' >
                <div className='image'><img src={item.img} alt="not found" /></div>
                <div className='description' >
                    <h4>{item.description}</h4>
                </div>
                <div className='brand' >{item.brand}</div>
                <div className='price' >
                    <h3>₹ {item.price}</h3>
                    <p>onword</p>
                </div>
                <div className='delivery' >Free Delivery</div>
                <div><button className='rating' >{item.rating}</button></div>
            </div>
        })}
        </div>
        
    </DIV>
  )
}

const DIV = styled.div`
    .rating{
        border: none;
        padding: 7px;
        border-radius:9px;
        width: 50px;
        background-color:rgb(56, 240, 56);
        color: white;
        font-weight: bold;
        margin: 15px 2px;
    }
`