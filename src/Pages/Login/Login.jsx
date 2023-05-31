import React, { useContext, useEffect,  useState } from "react";
import photo from '../../assets/others/authentication2.png'
import bgPhoto from '../../assets/others/authentication.png'
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../Providers/AuthProviders";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2'

const Login = () => {
    
    const [disable, setDisable] = useState(true)
    const {signIn} = useContext(AuthContext)


    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            Swal.fire({
                title: 'Log in successfully',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
        })
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if(validateCaptcha(user_captcha_value)){
            setDisable(false)
        }
    }
   
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
  return (

    <>
    <Helmet>
        <title>Bistro Boss | login</title>
        
      </Helmet>
    <div className="max-w-full" style={{
        backgroundImage: `url(${bgPhoto})`,
      }}>
        
        <div className="hero min-h-screen ">
      <div className="hero-content flex ">
        <div className="text-center lg:text-left">
          <img src={photo} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
            
          <form onSubmit={handleLogin} className="card-body">
          <h1 className="text-4xl font-bold text-center">Please Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
               
              </label>
            </div>
            <div className="form-control">
              <label className="label">
              < LoadCanvasTemplate />
              </label>
              <input
                onBlur={handleValidateCaptcha}
                type="text"
                
                name="captcha"
                placeholder="type the text above"
                className="input input-bordered"
                required
              />
             
              <label className="label">
                
              </label>
            </div>
            <div className="form-control mt-6">
                <input disabled={disable} className="btn btn-primary" type="submit" value="Login" />
              
            </div>
          </form>
          <p>New here? <Link to="/signup">create an account!</Link> </p>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Login;
