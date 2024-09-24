import React from "react";
import logo from "../images/logo1.png";

const LogoText = ({ color }) => {
  return (
    <div className=" flex justify-start items-center">
      <img src={logo} width={60} height={55} alt="verify email" />
      <span
        className={`text-[14px] font-bold max-w-[151px] leading-tight m-0  text-white`}
      >
        ABDULMUJEEB BLOCKCHAIN
      </span>
    </div>
  );
};
const LogoTextColored = ({ color }) => {
  return (
    <div className=" flex justify-start items-center">
      <img src={logo} width={60} height={55} alt="verify email" />
      <span
        className={`text-[14px] font-bold max-w-[151px] leading-tight m-0  text-[#183180]`}
      >
        ABDULMUJEEB BLOCKCHAIN
      </span>
    </div>
  );
};

export { LogoTextColored, LogoText };
