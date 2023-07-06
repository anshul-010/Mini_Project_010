import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../redux/store'
import { fetchData } from '../redux/productReducer/action'
import "../CSS/home.css"

export const Home = () => {

    const dispatch = useDispatch()
    const data = useSelector((store)=>store.productReducer.products)
    // console.log("home",data)

    useEffect(()=>{
        dispatch(fetchData)
    },[])

  return (
      <div >
        <div><h1>Home</h1></div>
        <div className='container'  >
        {data?.map((item)=>{
            return <div className='cart' >
                <div className='image'><img src={item.img} alt="not found" /></div>
                <div className='description' >
                    <h4>{item.description}</h4>
                </div>
                <div className='price' >
                    <h3>₹ {item.price}</h3>
                    <p>onword</p>
                </div>
                <div className='delivery' ><p>Free Delivery</p></div>
                <div><button>{item.rating}</button></div>
            </div>
        })}
        </div>
        
    </div>
  )
}
