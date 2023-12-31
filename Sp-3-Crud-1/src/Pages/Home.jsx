import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../redux/store";
import { fetchData } from "../redux/productReducer/action";
import { styled } from "styled-components";
import "../CSS/home.css";
import { Link, useSearchParams } from "react-router-dom";

export const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.productReducer.products);
  const isAuth = useSelector((store)=>store.authReducer.isAuth)
  let [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.getAll("brand"))


  let paramObj = {
    params: {
      brand: searchParams.getAll("brand"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
    },
  };

  useEffect(() => {
    dispatch(fetchData(paramObj));
  }, [searchParams]);

  return (
    <DIV>
      <div>
        <h1>Home</h1>
      </div>
      <div className="container">
        {data?.map((item) => {
          return (
            <div className="cart" key={item.id}>
              <div className="image">
                <img src={item.img} alt="not found" />
              </div>
              <div className="description">
                <h4>{item.description}</h4>
              </div>
              <div className="brand">{item.brand}</div>
              <div className="price">
                <h3>₹ {item.price}</h3>
                <p>onword</p>
              </div>
              <div className="delivery">Free Delivery</div>
              <div>
                <div
                  className="rating"
                  style={{
                    backgroundColor:
                      item.rating <= 2.9
                        ? "red"
                        : item.rating > 3.0 && item.rating > 3.9
                        ? "rgb(56, 240, 56)"
                        : "#fbea03",
                  }}
                >
                  {item.rating}{" "}
                  <img
                    
                    width={25}
                    height={15}
                    src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/small_star_empty.svg"
                    alt="not"
                  />{" "}
                </div>
              </div>  
              <div className="edit-delete" >
                <button className="edit" ><Link style={{textDecoration:"none",color:"white"}} to={`edit/${item.id}`} >Edit</Link></button>
                {isAuth && <button className="delete" >Delete</button>}
              </div>
            </div>
          );
        })}
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  .rating {
    border: none;
    padding: 7px;
    border-radius: 9px;
    width: 50px;
    background-color: rgb(56, 240, 56);
    color: white;
    font-weight: bold;
    margin: 15px 2px;
  }
`;
