import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useSearchParams } from "react-router-dom";


export const Sidebar = () => {

  let [searchParams, setSearchParams] = useSearchParams();
  let searchData = searchParams.getAll("brand")
  let searchOrder = searchParams.get("order")
  const [brand,setBrand] = useState(searchData || [])
  const [order,setOrder] = useState(searchOrder || "")
  // console.log(searchParams)

  useEffect(()=>{
    const params = {
      brand:brand,
      
    }
    order && (params.order = order)
    setSearchParams(params)
  },[brand,order])

  
  function handleChange(e){
    const {value} = e.target
    let newBrand = [...brand]

    if(newBrand.includes(value)){
      newBrand = newBrand.filter((ele)=>{
        return ele!==value
      })
    }
    else{
      newBrand.push(value)
    }

    setBrand(newBrand)
  }

  function handlePrice(e){
    setOrder(e.target.value)
  }
  console.log(order)

  return (
    <DIV
      className="sidebar"
      style={{  textAlign: "center" }}
    >
      <h2>side bar</h2>
      <hr />
      <br />
      <h3>Filter by brand</h3>
      <div>
        <div className="filter" >
          <input type="checkbox" value={"duke"} onChange={handleChange} checked={brand.includes("duke")} />
          <label>Duke</label>
        </div>
        <div className="filter" >
          <input type="checkbox" value={"levi's"} onChange={handleChange} checked={brand.includes("levi's")} />
          <label>Levi's</label>
        </div>
        <div className="filter" >
          <input type="checkbox" value={"Peter England"} onChange={handleChange} checked={brand.includes("Peter England")} />
          <label>Peter England</label>
        </div>
        <br />
        <h3>Sort by price</h3>
        <div onChange={handlePrice} >
          <div className="filter"  >
          <input type="radio" value={"asc"} name="order" defaultChecked={order==="asc"} />
          <label>Low to High</label>
          </div>
          <div className="filter"  >
          <input type="radio" value={"desc"} name="order" defaultChecked={order==="desc"} />
          <label>High to low</label>
          </div>
          <br />
          <button onClick={()=>setOrder("")} className="reset" >Reset Price</button>
        </div>
      </div>
    </DIV>
  );
};


const DIV = styled.div`

  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  border-radius: 20px;
  margin-top: 15px;
  width: 40%;
  

  .filter{
    
    width: 130px;
    display: flex;
    gap: 10px;
    margin: 5px auto ;
    color: #3f3e3e;
    font-size: medium;
    font-weight: bold;
  }

  h3{
    color: #323131;
    text-decoration: underline;
  }

  .reset{
    padding: 5px;
    background-color: #24eab5;
    /* background-color: #fbea03; */
    border: none;
    color: white;
    font-weight: bold;
    font-size: medium;
    border-radius: 10px;
  }
`