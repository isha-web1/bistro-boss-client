import React, { useContext } from "react";
import {FaGoogle} from 'react-icons/Fa'
import { AuthContext } from "../../../Providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const {googleSignIn} = useContext(AuthContext)
  const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'; 

  const handleGoogleSignIn = () =>{
    googleSignIn()
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser)
      const saveUser = {displayName : loggedUser.displayName , email : loggedUser.email}
      fetch('http://localhost:5000/users',{
          method :'POST',
          headers : {
            'content-type' : 'application/json'
          },
          body : JSON.stringify(saveUser)
        })
        .then(res => res.json())
        .then(data =>{
          if(data.insertedId){
            
           
            navigate(from , {replace: true})
          }
        })
      
    })
    .catch(error =>{console.log(error)})
  }
  return (
    <div>
      <div className="divider"></div>
      <div className="w-full text-center my-4">
      <button onClick={handleGoogleSignIn} className="btn btn-square btn-outline">
       <FaGoogle></FaGoogle>
      </button>
      </div>
    </div>
  );
};

export default SocialLogin;
