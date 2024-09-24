import React, { useState } from "react";
import logo from "../../images/logo1.png";
import verifyImage from "../../images/verify.svg";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { LogoText } from "../LogoText";

const VerifyEmail = () => {
  const [contactType, setContactType] = useState("email");
  const [form] = Form.useForm();
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
        <img src={verifyImage} width={400} height={400} alt="verify email" />
      </div>

      <div className="flex flex-col justify-center items-start gap-8 px-10 w-1/2">
        <img src={logo} alt="get started" width={120} />
        <div className="flex flex-col gap-2 items-start pl-4">
          <h1 className="text-2xl font-bold">
            Welcome to Abdul-Mujeeb BlockChain
          </h1>
          <p>Fill in your detail</p>
        </div>
        <div className="w-full">
          <Form
            className="px-4 w-full flex flex-col gap-8"
            layout="vertical"
            form={form}
            onFinish={() => alert("Working here")}
          >
            <div className="flex justify-start gap-5 w-full">
              <Form.Item
                layout="vertical"
                name="first_name"
                className="!m-0 w-full"
                label={
                  <label className="font-semibold text-sm">First name</label>
                }
              >
                <Input
                  type="text"
                  className="w-full h-[45px] !rounded-tl-lg !rounded-br-lg"
                  placeholder="First name"
                  required
                />
              </Form.Item>
              <Form.Item
                layout="vertical"
                name="last_name"
                className="!m-0 w-full"
                label={
                  <label className="font-semibold text-sm">Last name</label>
                }
              >
                <Input
                  type="text"
                  className="w-full h-[45px] !rounded-tl-lg !rounded-br-lg"
                  placeholder="Last name"
                  required
                />
              </Form.Item>
            </div>
            {contactType === "email" ? (
              <Form.Item
                layout="vertical"
                name="email"
                className="!m-0 w-full"
                label={
                  <label className="font-semibold text-sm">Email Address</label>
                }
              >
                <Input
                  type="text"
                  className="w-full h-[45px] !rounded-tl-lg !rounded-br-lg"
                  placeholder="Email Address"
                  required={contactType === "email"}
                />
              </Form.Item>
            ) : (
              <Form.Item
                layout="vertical"
                name="phone"
                className="!m-0 w-full"
                label={
                  <label className="font-semibold text-sm">Phone number</label>
                }
              >
                <Input
                  type="number"
                  className="w-full h-[45px] !rounded-tl-lg !rounded-br-lg"
                  placeholder="Phone number"
                  required={contactType === "phone"}
                />
              </Form.Item>
            )}
            <p
              onClick={() =>
                setContactType((prev) => {
                  if (prev === "email") {
                    return "phone";
                  } else {
                    return "email";
                  }
                })
              }
              className="cursor-pointer text-gray-700 hover:text-gray-800"
            >
              {contactType === "email"
                ? "Use phone number instead?"
                : "Use email address instead?"}
            </p>

            <div className="w-full flex justify-center items-center">
              <Button
                type="submit"
                variant="large"
                className="!w-[400px] text-lg !rounded-none !rounded-tl-2xl !rounded-br-2xl !bg-dblue !text-white h-[50px] hover:!opacity-90 !font-semibold hover:!border-none active:scale-95"
              >
                Verify Email
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
