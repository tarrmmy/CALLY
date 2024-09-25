import React, { useState } from "react";
import { LogoText } from "../LogoText";
import { Link } from "react-router-dom";
import emailSent from "../../images/emailSent.svg";
import OtpInput from "react-otp-input";
import { Button } from "antd";

const VerifyOTP = () => {
  const [otpNum, setOtpNum] = useState("");
  return (
    <div className="flex items-center">
      <div className="absolute w-full flex justify-between items-center z-10 top-0 p-6 py-8">
        <LogoText />
        <p>
          Already have an acoount?{""}
          <Link to="#" className="font-semibold underline">
            Sign In
          </Link>
        </p>
      </div>
      <div className="min-h-[100vh] w-1/2 relative  bg-[#183180] flex justify-center items-center">
        <img src={emailSent} width={400} height={400} alt="verify email" />
      </div>
      <div className="px-10 flex flex-col justify-center items-center gap-10 w-1/2">
        <div>
          <p className="text-3xl font-bold mb-4">Email verification</p>
          <p className="text-gray-700">A code has been sent to your Email.</p>
        </div>

        <div className="flex justify-center items-center w-full">
          <OtpInput
            value={otpNum}
            numInputs={4}
            onChange={setOtpNum}
            renderInput={(props) => (
              <input
                {...props}
                className="!w-[80px] h-[90px] mx-3 !text-center text-3xl font-bold bg-white rounded-md"
                placeholder=""
              />
            )}
          />
        </div>
        <p className="text-base">
          Didn't recieve code?{" "}
          <span className="font-bold underline">Resend</span>
        </p>

        <div className="w-full flex justify-center items-center">
          <Button
            type="submit"
            variant="large"
            className="!w-[400px] text-lg !rounded-none !rounded-tl-2xl !rounded-br-2xl !bg-dblue !text-white h-[50px] hover:!opacity-90 !font-semibold hover:!border-none active:scale-95"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
