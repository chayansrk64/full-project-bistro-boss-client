import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
 
const SignUp = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate()

    const { register, handleSubmit, reset,  formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)

        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);

            updateUserProfile(data.name, data.photoURL)
            .then(()=> {
              const userDetails = {name: data.name, email: data.email}
                // console.log('user profile updated');
                fetch('http://localhost:5000/users', {
                  method: "POST",
                  headers: {
                    'content-type': 'application/json'
                  },
                  body: JSON.stringify(userDetails)
                })
                .then(res => res.json())
                .then(data => {
                  if(data.insertedId){
                    reset();
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'User created successfully!',
                        showConfirmButton: false,
                        timer: 1500
                      })
                      navigate('/')
                  }
                  
                })

               
            })
            .catch(error => console.log(error))

        })

    };

return (
        <>
         <Helmet>
        <title> Bistro Boss | Sign up </title>
      </Helmet>
        
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center w-1/2 lg:text-left">
      <h1 className="text-5xl font-bold">SignUp now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" {...register("name",  { required: true })} name="name" className="input input-bordered" />
          {errors.name && <span className="text-red-600">Name is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Photo URL" {...register("photoURL",  { required: true })} name="photoURL" className="input input-bordered" />
          {errors.photoURL && <span className="text-red-600">photoURL is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" {...register("email", { required: true })} name="email" className="input input-bordered" />
          {errors.email && <span className="text-red-600">Email is required</span>}

        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password"  {...register("password",
           { 
            required: true,
            minLength:6,
            maxLength: 20, 
            pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6}/

            })} name="password" className="input input-bordered" />
          {errors.password && <span className="text-red-600">Password at least 6 and not more than 20 characters</span>}
           {errors.password && <span className="text-red-600">Password should uppercase, lowercase and special characters</span>}

          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          
          <input  className="btn btn-primary" type="submit" value="Sign Up" />
        </div>
      </form>
      <p className="p-3"><small>Already have an Account? <Link to='/login' className="text-warning">Log In</Link> </small></p>
      <div className="text-center mb-4">
        <SocialLogin></SocialLogin>
      </div>
    </div>
  </div>
</div>
        </>
    );
};

export default SignUp;