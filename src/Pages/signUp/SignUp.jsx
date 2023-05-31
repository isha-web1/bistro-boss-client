import React, { useContext } from "react";
import photo from '../../assets/others/authentication1.png'
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link } from "react-router-dom";


const SignUp = () => {
    const { register, handleSubmit,  formState : {errors}  } = useForm();
  const {createUser} = useContext(AuthContext)
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error => console.log(error))
    };

    
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
        </div>
      </div>
    </div>
    </>
  );
};

export default SignUp;