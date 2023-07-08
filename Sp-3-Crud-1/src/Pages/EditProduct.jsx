import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { store } from "../redux/store";
import { updateProduct } from "../redux/productReducer/action";
import { useToast } from '@chakra-ui/react'
// import { useState } from 'react';


export const EditProduct = () => {
    const toast = useToast()
    const {id} = useParams()
    const product = useSelector((store)=>store.productReducer.products)
    const dispatch = useDispatch()
    const [data, setData] = useState({});

    function handleChange(e){
      const {name,value} = e.target
      setData((prev)=>{return {...prev, [name]:name==="price"? +value :name==="rating"? +value:value}})

    }

    function handleSubmit(e){
      e.preventDefault()
      dispatch(updateProduct(data,id))
      toast({
        title: 'Product updated',
        status: 'success',
        duration: 1500,
        isClosable: true,
      })
    }

    useEffect(()=>{
       let demo =  product.find((ele)=>ele.id==id)
       setData(demo)
      
    },[])

    

  return (
    <DIV>
      <h1>Edit Product</h1>

      <div>
        
        <form onSubmit={handleSubmit}>
          <select
            name="name"
            id=""
            required
            onChange={handleChange}
            value={data.name}
          >
            <option value="">Select Name</option>
            <option value="jeans">Jeans</option>
            <option value="shirt">Shirt</option>
            <option value="t-shirt">T-shirt</option>
          </select>
          <br />
          <select
            name="brand"
            id=""
            required
            onChange={handleChange}
            value={data.brand}
          >
            <option value="">Select Brand</option>
            <option value="duke">Duke</option>
            <option value="levi's">Levi's</option>
            <option value="Peter England">Peter England</option>
          </select>
          <br />
          <input
            type="text"
            placeholder="Image URL"
            name="img"
            required
            onChange={handleChange}
            value={data.img}
          />
          <input
            type="text"
            placeholder="description"
            name="description"
            required
            onChange={handleChange}
            value={data.description}
          />
          <input
            type="number"
            placeholder="Rating"
            name="rating"
            required
            onChange={handleChange}
            value={data.rating}
          />
          <input
            type="number"
            placeholder="Price"
            name="price"
            required
            onChange={handleChange}
            value={data.price}
          />
          <input type="submit" className="button" name="" value="Update Product" />
        </form>
        
      </div>
    </DIV>
  );
};



const DIV = styled.div`
  border-radius: 10px;
  padding: 55px;
  width: 450px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
  margin-top: 350px;

  form {
    display: flex;
    flex-direction: column;
    grid-gap: 10px;
  }

  form > input {
    border: 1px solid gray;
    outline: none;
    padding: 10px;
    font-size: large;
    color: #555151;
  }

  form > select {
    border: 1px solid gray;
    outline: none;
    padding: 10px;
    font-size: large;
    color: #555151;
  }

  .button {
    background-color: #fdb85d;
    font-size: x-large;
    font-weight: bolder;
    color: #363333;
    border: none;
    border-radius: 2px;
  }

  .button:hover {
    background-color: #eea61f;
    color: white;
    font-size: x-large;
    font-weight: bolder;
    border: none;
    border-radius: 2px;
    cursor: pointer;
  }

  form > input:hover {
    border: 1px solid #3e3b3b;
  }

  h1 {
    text-align: center;
    color: #363333;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: xx-large;
    font-weight: bolder;
    
  }
`;