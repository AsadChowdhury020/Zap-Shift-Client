import React from "react";
import errorImage from "../../assets/error.png";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";
const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <img src={errorImage} alt="" />
        <div className="flex justify-center items-center">
            <Link to={'/'} className="bg-primary px-8 py-4 rounded-xl flex items-center gap-2"> < FaArrowLeft /> Home</Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
