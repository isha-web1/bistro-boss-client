import React from "react";
import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";

const MyCart = () => {
    const [cart] = useCart()
    const total = cart.reduce((sum, item) => item.price + sum, 0)
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | my cart</title>
      </Helmet>
      <h1>my car page</h1>
      <div>
        <h1 className="text-3xl" >toatla items : {cart.length}</h1>
        <h1 className="text-3xl" >total price : {total}</h1>
      </div>
    </div>
  );
};

export default MyCart;
