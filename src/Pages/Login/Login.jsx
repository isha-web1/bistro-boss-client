import React, { useEffect, useRef, useState } from "react";
import photo from '../../assets/others/authentication2.png'
import bgPhoto from '../../assets/others/authentication.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const captchaRef = useRef(null)
    const [disable, setDisable] = useState(true)
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if(validateCaptcha(user_captcha_value)){
            setDisable(false)
        }
    }
   
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
  return (

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
                type="password"
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
                type="text"
                ref={captchaRef}
                name="captcha"
                placeholder="type the text above"
                className="input input-bordered"
                required
              />
              <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs mt-2">validate</button>
              <label className="label">
                
              </label>
            </div>
            <div className="form-control mt-6">
                <input disabled={disable} className="btn btn-primary" type="submit" value="Login" />
              
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
