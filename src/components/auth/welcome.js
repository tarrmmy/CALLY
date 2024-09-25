import React from "react";
import welcomeScreen from "../../images/welcomeScreen.svg";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { LogoTextColored } from "../LogoText";

const WelcomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen gap-5">
      <div className="absolute w-full flex justify-between items-center z-10 top-0 p-6 py-8">
        <LogoTextColored color={"#183180"} />
      </div>
      <img
        src={welcomeScreen}
        width={500}
        alt="This is a shariah based platform"
        className="rounded-3xl"
      />
      <h1 className="text-2xl font-bold">Welcome</h1>
      <p className=" text-center max-w-[750px]">
        THIS IS A BLOCKCHAIN BASED PLATFORMS THAT ALLOWS ALL SHARIAH COMPLIANT
        FINANCIAL TRANSACTIONS.
      </p>
      <Link to="/dashboard" className="w-fit">
        <Button
          type="submit"
          variant="large"
          className="!w-[400px] text-lg !rounded-none !rounded-tl-2xl !rounded-br-2xl !bg-dblue !text-white h-[50px] hover:!opacity-90 !font-semibold hover:!border-none active:scale-95"
        >
          Proceed
        </Button>
      </Link>
    </div>
  );
};

export default WelcomePage;
