import React from "react";
import { useForm } from "react-hook-form";
import { PiCalendarSlash } from "react-icons/pi";
import useAuth from "../../../hooks/useAuth";
import imageUploadIcon from "../../../assets/image-upload-icon.png";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser, updateUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate()

  const handleRegistration = (data) => {
    // console.log(data);
    const profileImg = data.photo[0];
    console.log("PhotoUrl :", profileImg);
    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result);

        // Store the image and get the photo url
        const formData = new FormData();
        formData.append("image", profileImg);

        const imageApiUrl = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_host_key
        }`;
        axios.post(imageApiUrl, formData).then((response) => {
          // console.log(response.data.data.url)
          // Update user profile here

          const userProfile = {
            displayName: data.name,
            photoURL: response.data.data.url,
          };
          updateUser(userProfile)
            .then(() => {
              console.log("User profile updated successfully");
              navigate(location?.state || '/')
            })
            .catch((error) => {
              console.log(error);
            });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="shadow-2xl p-8 rounded-2xl">
      <h1 className="text-4xl font-bold my-3">Create an Account</h1>
      <p className="my-3">Register with ZapShift</p>
      <figure className="h-[50px] w-[50px]">
        <img className="rounded-full" src={imageUploadIcon} alt="" />
      </figure>
      <form onSubmit={handleSubmit(handleRegistration)} action="">
        <fieldset className="fieldset">
          {/* Name  */}
          <label className="label text-xl">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input w-full"
            placeholder="Name"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500">Name is required</p>
          )}
          {/* Photo  */}
          <label className="label text-xl">Photo</label>
          <input
            type="file"
            {...register("photo", { required: true })}
            className="file-input w-full"
            placeholder="Photo"
          />
          {errors.photo?.type === "required" && (
            <p className="text-red-500">Photo is required</p>
          )}
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
            {...register("password", {
              required: true,
              minLength: 6,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/,
            })}
            className="input w-full"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500 ">
              Password must be 6 characters or longer
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500">
              Password must include one uppercase letter, one lowercase letter,
              one number, and one special character.
            </p>
          )}
          <div>
            <a className="link link-hover text-xl">Forgot password?</a>
          </div>
          <button className="btn bg-primary mt-4 text-xl">Register</button>
        </fieldset>
      </form>
      <Link state={location?.state} to={"/login"} className="text-xl">
        Already have an account? <span className="text-blue-500">Login</span>
      </Link>

      {/* Social Login  */}
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
