import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const ResetPassword = () => {
  const { passwordReset } = useAuth();
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlePasswordReset = (data) => {
    passwordReset(data.email)
      .then(() => {
        console.log("Password reset email send");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="shadow-2xl p-8 rounded-2xl">
      <h1 className="text-4xl font-bold my-3">Reset Password</h1>
      <p>Check your email to reset password of ZapShift</p>
      <form onSubmit={handleSubmit(handlePasswordReset)} action="">
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
          <button className="btn bg-primary mt-4 text-xl">Send Email</button>
        </fieldset>
      </form>
      <p className="my-5 text-center text-xl">Or</p>
      <Link onClick={() => navigate(-1)} className="btn bg-primary mt-4 text-xl w-full"> <FaArrowLeft />Back</Link >
    </div>
  );
};

export default ResetPassword;
