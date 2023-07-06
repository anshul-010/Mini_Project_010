import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { postProductData } from "../redux/productReducer/action";

export const Admin = () => {

  const dispatch = useDispatch()
  

  const initialState = {
    name:"",
    brand:"",
    img:"",
    description:"",
    rating:"",
    price:""
  }

  const [data,setData] = useState(initialState)

  function handleChange(e){
    const {name,value} = e.target
    setData((prev)=>{
      return {...prev, [name]:name==="price"? +value :name==="rating"? +value:value}
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    dispatch(postProductData(data))
    setData(initialState)
  }

  // useEffect(()=>{

  // },[])

  return (
    <DIV>
      <h1>Admin Page</h1>
      <form onSubmit={handleSubmit} >
        <select name="name" id="" required onChange={handleChange} value={data.name}>
          <option value="">Select Name</option>
          <option value="jeans">Jeans</option>
          <option value="t-shirt">T-shirt</option>
        </select>
        <br />
        <select name="brand" id="" required onChange={handleChange} value={data.brand}>
          <option value="">Select Brand</option>
          <option value="duke">Duke</option>
          <option value="levi's">Levi's</option>
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
        <input type="submit" className="button" name="" value="Add Product" />
      </form>
    </DIV>
  );
};

const DIV = styled.div`
  border-radius: 10px;
  padding: 55px;
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;

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
  }

  .button:hover {
    background-color: #eea61f;
    color: white;
    font-size: x-large;
    font-weight: bolder;
    cursor: pointer;
  }

  form > input:hover {
    border: 1px solid #3e3b3b;
  }

  h1 {
    text-align: center;
    color: #363333;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
`;
