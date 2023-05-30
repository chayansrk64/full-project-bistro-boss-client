import { useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const Login = () => {

  
    const [disabled, setDisabled] = useState(true);
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email= form.email.value;
        const password = form.password.value;
        const result = {email, password};
        console.log(result);

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Log In Successfully!',
                showConfirmButton: false,
                timer: 1500
              })

              navigate(from, {replace: true});
        })


    }

    useEffect(() => {
        loadCaptchaEnginge(6); 
    }, [])

    const handleCaptchaValidate = (e) => {
        const user_captcha_value = e.target.value;
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }



    return (
            <>
             <Helmet>
                <title> Bistro Boss | Log in </title>
            </Helmet>
            
 <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center w-1/2 lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">

      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>

        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input type="text" onBlur={handleCaptchaValidate} name='recaptcha' placeholder= " type the above recaptcha" className="input input-bordered" />
          
        </div>
        <div className="form-control mt-6">
          
          <input disabled={disabled} type="submit" className="btn btn-primary" value="Login" />
        </div>
      </form>

      <p className='p-3'><small>New here? <Link to='/signup' className='text-warning'>Sign Up</Link> </small></p>
      <div className='text-center mb-4'>
        <SocialLogin></SocialLogin>
      </div>
    </div>
    
  </div>
    </div>
            </>
    );
};

export default Login;