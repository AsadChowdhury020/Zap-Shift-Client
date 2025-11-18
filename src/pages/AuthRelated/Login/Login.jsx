import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signInUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate()

  const handleLogin = (data) => {
    console.log(data);

    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result);
        navigate(location?.state || '/')
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="shadow-2xl p-8 rounded-2xl">
      <h1 className="text-4xl font-bold my-3">Welcome Back</h1>
      <p>Login with ZapShift</p>
      <form onSubmit={handleSubmit(handleLogin)} action="">
        <fieldset className="fieldset">
          {/* Email  */}
          <label className="label text-xl">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input w-full"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required</p>
          )}
          {/* Password  */}
          <label className="label text-xl">Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
            className="input w-full"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">Email is required</p>
          )}
          <div>
            <a className="link link-hover text-xl">Forgot password?</a>
          </div>
          <button className="btn bg-primary mt-4 text-xl">Register</button>
        </fieldset>
      </form>
      <Link state={location?.state} to={"/register"} className="text-xl">
        Don't have any account? <span className="text-blue-500">Register</span>
      </Link>

      {/* Social Login */}
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
