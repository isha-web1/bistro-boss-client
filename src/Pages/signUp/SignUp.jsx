import React, { useContext } from "react";
import photo from '../../assets/others/authentication1.png'
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/socialLogin/SocialLogin";


const SignUp = () => {
    const { register, handleSubmit, reset, formState : {errors}  } = useForm();
  const {createUser, user, updateUserProfile} = useContext(AuthContext)
  const navigate = useNavigate()
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            if(loggedUser){
              handleUpdateProfile({displayName : data.name , photoURL : data.photoURL, email : data.email })
            }
            console.log(loggedUser)
            
            reset()
        })
        .catch(error => console.log(error))
    };

    const updateUserData = (profile) =>{
      updateProfile(user,{
        photoURL : photoURL,
        name : name,
        email : email
      })
      
    }

    const handleUpdateProfile = (profile) => {
      updateUserProfile(profile)
      .then(()=>{
        // const saveUser = {displayName : data.name , photoURL : data.photoURL}
        fetch('http://localhost:5000/users',{
          method :'POST',
          headers : {
            'content-type' : 'application/json'
          },
          body : JSON.stringify(profile)
        })
        .then(res => res.json())
        .then(data =>{
          if(data.insertedId){
            reset()
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'user created successfully',
              showConfirmButton: false,
              timer: 1500
            })
            navigate('/')
          }
        })
        

        
      })
      .catch(error => console.log(error))   
  }

    
  return (
    <>
    <Helmet>
        <title>Bistro Boss | sign up</title>
        
      </Helmet>
    <div className="hero min-h-screen ">
      <div className="hero-content flex gap-4">
        <div className="text-center lg:text-left">
          <img src={photo} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h1 className="text-4xl font-bold text-center">Please SignUp!!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">name</span>
              </label>
              <input
                type="text"
                name="name"
                {...register("name",{ required: true })}
                placeholder="name"
                className="input input-bordered"
                
              />
              {errors.name && <span className="text-red-600">this field is isRequired</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                {...register("email",{ required: true })}
                placeholder="email"
                className="input input-bordered"
                
              />
              {errors.email && <span className="text-red-600">email field is isRequired</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">photo URL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                {...register("photoURL",{ required: true })}
                placeholder="photoURL"
                className="input input-bordered"
                
              />
              {errors.photoURL && <span className="text-red-600">photoURL is isRequired</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                {...register("password",{ required: true, maxLength: 20, minLength : 6 , pattern : /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })}
                placeholder="password"
                className="input input-bordered"
                
              />
              {errors.password && <span className="text-red-600">password field is isRequired</span>}
              {errors.password?.type === 'minLength' && <p className="text-red-600">password must be 6 charecters!</p>}
              {errors.password?.type === 'maxLength' && <p className="text-red-600">password must be less than 20 charecters!</p>}
              {errors.password?.type === 'pattern' && <p className="text-red-600">password must have one uppercase one special charecters one lowercase and one number must be provided!</p>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="sign Up" />
              
            </div>
          </form>
          <p>all ready have an account? <Link to='/login'>please login</Link> </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
    </>
  );
};

export default SignUp;
