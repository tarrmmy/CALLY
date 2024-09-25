import React, { useEffect } from "react";
import emailVerify from "../../images/emailSent.svg";
import { Link, useNavigate } from "react-router-dom";

const ConfirmVerification = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/auth/sign-in");
    }, 10000);
  }, []);
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-3">
      <img
        src={emailVerify}
        alt="Email  verification has been sent"
        className="animate-bounce"
        width={400}
      />
      <h1 className="txt-center font-bold text-2xl">
        Email Verification Link Sent!!!
      </h1>
      <p className="text-sm font-light">
        An emial verification link has been sent to your email, kindly check
        your mail for the link to verify your account!
      </p>
      <Link to="https://mail.google.com/" target="_blank">
        <button className="!w-[400px] text-lg mt-3 !rounded-none !rounded-tl-2xl !rounded-br-2xl !bg-dblue !text-white h-[50px] hover:!opacity-90 !font-semibold hover:!border-none active:scale-95">
          Check my mail
        </button>
      </Link>
    </div>
  );
};

export default ConfirmVerification;
