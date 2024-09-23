import React from "react";
import logo from "../../images/logo1.png";
import verifyImage from "../../images/verify.svg";
import { Link } from "react-router-dom";

const VerifyEmail = () => {
  return (
    <div className="flex items-center">
      <div className="absolute w-full flex justify-between items-center z-10 top-0 p-6 py-8">
        <div className=" flex justify-start items-center">
          <img src={logo} width={72} height={55} alt="verify email" />
          <span className="text-base font-bold max-w-[151px] text-white leading-tight m-0">
            ABDULMUJEEB BLOCKCHAIN
          </span>
        </div>
        <p>
          Already have an acoount?{""}
          <Link to="#" className="font-semibold underline">
            Sign In
          </Link>
        </p>
      </div>
      <div className="min-h-[100vh] w-1/2 relative  bg-[#183180] flex justify-center items-center">
        <img src={verifyImage} width={400} height={400} alt="verify email" />
      </div>

      <div className="flex flex-col justify-center items-start gap-8 px-10">
        <img src={logo} alt="get started" width={120} />
        <div className="flex flex-col gap-2 items-start pl-4">
          <h1 className="text-2xl font-bold">
            Welcome to Abdul-Mujeeb BlockChain
          </h1>
          <p>Register your account</p>
        </div>
        <div className="w-full">
          <form className="px-4 w-full flex flex-col gap-8">
            <div className="flex justify-start gap-5 w-full">
              <div className="w-full flex flex-col gap-2">
                <label className="font-semibold text-sm">First name</label>
                <input
                  type="text"
                  className="w-[250px] h-[40px] rounded-tl-lg rounded-br-lg"
                  placeholder="First name"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label className="font-semibold text-sm">Last name</label>
                <input
                  type="text"
                  className="w-[250px] h-[40px] rounded-tl-lg rounded-br-lg"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="font-semibold text-sm">Email address</label>
              <input
                type="email"
                className="w-full h-[40px] rounded-tl-lg rounded-br-lg"
                placeholder="Email address"
              />
              <p className="font-light text-xs">Use Phone Number instead?</p>
            </div>
            <div className="w-full flex justify-center items-center">
              <button className="w-[380px] rounded-tl-2xl rounded-br-2xl bg-dblue text-white py-3 hover:opacity-90 font-semibold">
                Verify Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
