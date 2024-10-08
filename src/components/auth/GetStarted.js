import React from "react";
import home from "../../images/logo1.png";
import { Link } from "react-router-dom";
import { LogoText } from "../LogoText";

const GetStarted = () => {
  return (
    <div>
      <div className="flex items-center">
        <div className="bg-welcome bg-no-repeat bg-cover bg-right-top min-h-[100vh] w-1/2 relative">
          <div className="absolute flex justify-start items-center top-6 left-6">
            <LogoText />
          </div>
        </div>
        <div className="mx-auto flex flex-col items-center justify-center gap-7">
          <img src={home} alt="get started" />
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-2xl font-bold">
              Welcome to Abdul-Mujeeb BlockChain
            </h1>
            <p>A blockchain that allows Shariah Financial Transactions</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-4">
            <Link to="/auth/sign-in">
              <button className=" active:scale-95 w-[400px] rounded-tl-2xl text-lg rounded-br-2xl bg-dblue text-white py-3 hover:opacity-90 font-semibold">
                Sign In
              </button>
            </Link>
            <Link to="/auth/sign-up">
              <button className="active:scale-95 w-[400px] text-lg rounded-tl-2xl rounded-br-2xl py-3 border border-dblue hover:bg-dblue hover:text-white font-semibold">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
