import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
 
const SignUp = () => {

    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

return (
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
    </div>
  </div>
</div>
    );
};

export default SignUp;