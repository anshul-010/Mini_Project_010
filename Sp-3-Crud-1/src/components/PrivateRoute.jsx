import { useSelector } from "react-redux";
import { store } from "../redux/store";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({children}) => {

  const isAuth = useSelector((store)=>store.authReducer.isAuth)
  const location = useLocation()
  // console.log("P",location)

  if(!isAuth){
    return  <Navigate to='/login' state={location.pathname} replace={true}/>
  }

  return children
};
