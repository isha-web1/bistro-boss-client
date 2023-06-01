import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleAddToCart = (item) => {
    console.log(item);
    if (user) {
      fetch("http://localhost:5000/carts")
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "please login to order the food!",
        
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log in now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login')
        }
      });
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className=" absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
        {" "}
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>

        <p>recipe : {recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-500 mt-4 rounded-md"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
