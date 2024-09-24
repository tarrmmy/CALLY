import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate, Link } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import welcomeImg from "./../../images/SignIn.svg";
import { LogoText } from "../LogoText";
import logo from "../../images/logo1.png";

const SignIn = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const handleSignIn = () => {
    // e.preventDefault();
    // try {
    //   await signInWithEmailAndPassword(auth);
    //   navigate("/dashboard"); // redirect after successful sign-in
    // } catch (error) {
    //   console.error("Error signing in:", error.message);
    // }
    // console.log(e);
    alert("twale");
  };

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
        <img
          src={welcomeImg}
          width={400}
          height={400}
          alt="verify email"
          className="mt-12"
        />
      </div>

      <div className="flex flex-col justify-center items-start gap-8 px-10 w-1/2">
        <img src={logo} alt="get started" width={100} />
        <div className="flex flex-col gap-2 items-start pl-4">
          <h1 className="text-2xl font-bold">
            Welcome to Abdul-Mujeeb BlockChain
          </h1>
          <p>Register your account</p>
        </div>
        <div className="w-full">
          <Form
            className="px-4 w-full flex flex-col gap-6"
            layout="vertical"
            form={form}
            onFinish={() => alert("Baba to mo graphics")}
            onFinishFailed={(errorInfo) => console.log("Failed:", errorInfo)}
          >
            <Form.Item
              name="email"
              className="!m-0"
              label={
                <label className="font-semibold text-sm">
                  User name/Email address
                </label>
              }
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                type="text"
                className="w-full h-[45px] !rounded-tl-lg !rounded-br-lg"
                placeholder="First name"
              />
            </Form.Item>
            <Form.Item
              name="admin_id"
              className="!m-0"
              label={
                <label className="font-semibold text-sm">
                  Admin?
                  <span className="text-[10px] font-light">
                    Enter admin Id?
                  </span>
                </label>
              }
            >
              <Input
                type="text"
                className="w-full h-[45px] !rounded-tl-lg !rounded-br-lg"
                placeholder="Enter admin id"
              />
            </Form.Item>
            <Form.Item
              className="!m-0"
              name="password"
              label={<label className="font-semibold text-sm">Password</label>}
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input
                type="password"
                className="w-full h-[45px] !rounded-tl-lg !rounded-br-lg"
                placeholder="Enter Password"
              />
            </Form.Item>
            <Checkbox>Save my login details.</Checkbox>
            <div className="w-full flex justify-center items-center">
              <Button
                type="submit"
                variant="large"
                className="!w-[400px] text-lg !rounded-none !rounded-tl-2xl !rounded-br-2xl !bg-dblue !text-white h-[50px] hover:!opacity-90 !font-semibold hover:!border-none active:scale-95"
              >
                Sign in
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
