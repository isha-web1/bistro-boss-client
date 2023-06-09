import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/signUp/SignUp";
import PrivetRoutes from "./PrivetRoutes";
import Secret from "../Pages/Shared/Secret/Secret";
import Dashboard from "../LayOut/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
          path : '/menu',
          element : <Menu></Menu>
        },
        {
          path : '/order/:category',
          element : <Order></Order>
        },
        {
          path : '/login',
          element : <Login></Login>
        },
        {
          path : '/signup',
          element : <SignUp></SignUp>
        },
        {
          path :'/secret',
          element : <PrivetRoutes><Secret></Secret></PrivetRoutes>
        }
      ]
      
    },
    {
      path : '/dashboard',
      element : <PrivetRoutes><Dashboard></Dashboard></PrivetRoutes>,
      children : [
        {
          path : 'mycart',
          element : <MyCart></MyCart>
        }
      ]
    }
  ]);

  export default router