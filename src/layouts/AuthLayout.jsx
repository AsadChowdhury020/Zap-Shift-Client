import React from "react";
import Logo from "../components/Logo/Logo";
import { Outlet } from "react-router";
import authImage from "../assets/authImage.png";
const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto my-10">
      <Logo></Logo>
      <div className="flex my-10 gap-5">
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
        <div className="flex-1 bg-[#FAFDF0]">
          <img src={authImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
