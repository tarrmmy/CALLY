

import register from "../../images/register.png";
import { LogoText } from "../LogoText";
import { Link } from "react-router-dom";
import { Form, Input, Checkbox, notification } from "antd";
import { useNavigate } from "react-router-dom";
import { supabaseClient } from "../../supabase.config";

const SignUp = () => {
  const [form] = Form.useForm();
  // const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();

 const blockWallet = async (userId) => {
  try {
    // const blockWallet = await addDoc(collection(db, 'wallets'), {
    //   "user_id": userId,
    //   "balance": 0
    // });
    const res = await supabaseClient
    .from("wallets")
    .insert({
      'user_id': userId,
      "balance": 0
    })
    console.log("UserBalance ::: ", res)
  } catch (error) {
    console.log(error, 'error')
  }
 } 

  const handleSignUp = async (e) => {
    if (e.password === e.confirm_password) {
      try {
        supabaseClient.auth.signUp({
          email: e.email,
          password: e.password,
        }).then((v) => {
          if (!v.error) {
            blockWallet(v.data.user.email);
            // api.s
            alert("Your account have been created successfully.")
            navigate('/auth/sign-in')
            return;
          }
          // api.error({
          //   message: "Registration Not Successful",
          //   description: v.error.message
          // })
          alert(`${v.error.message}`)
        })
      } catch (error) {
        console.log(error?.message);
      }
    } else alert("Password does not match!!!");
  };

  return (
    <div className="flex">
      {/* {contextHolder} */}
      <div className="absolute w-full flex justify-between items-center z-10 top-0 p-6 py-8">
        <LogoText />
      </div>
      <div className="bg-lblue min-h-[100vh]  w-1/2 flex justify-center items-center">
        <img
          className="mx-auto mt-10 py-8"
          src={register}
          alt="Register your account"
          width={500}
        />
      </div>
      <div className="w-1/2 px-10 flex flex-col justify-center items-start">
        <div className="w-full flex flex-col gap-1">
          <h1 className="text-3xl py-1 font-bold">
            Welcome to Abdul-Mujeeb BlockChain
          </h1>
          <p className="pb-4">Register your account</p>
        </div>
        <Form
          className="w-full flex flex-col gap-5"
          layout="vertical"
          form={form}
          onFinish={handleSignUp}
        >
          <div className="flex justify-start gap-3 w-full">
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
              label={<label className="font-semibold text-sm">Last name</label>}
            >
              <Input
                type="text"
                className="w-full h-[45px] !rounded-tl-lg !rounded-br-lg"
                placeholder="Last name"
                required
              />
            </Form.Item>
          </div>
          <Form.Item
            layout="vertical"
            name="email"
            className="!m-0 w-full"
            label={
              <label className="font-semibold text-sm">Email Address</label>
            }
          >
            <Input
              type="email"
              className="w-full h-[45px] !rounded-tl-lg !rounded-br-lg"
              placeholder="Email address"
              required
            />
          </Form.Item>
          <Form.Item
            layout="vertical"
            name="password"
            className="!m-0 w-full"
            label={
              <label className="font-semibold text-sm">Create Password</label>
            }
          >
            <Input
              type="password"
              className="w-full h-[45px] !rounded-tl-lg !rounded-br-lg"
              placeholder="Enter Password"
              required
            />
          </Form.Item>
          <Form.Item
            layout="vertical"
            name="confirm_password"
            className="!m-0 w-full"
            label={
              <label className="font-semibold text-sm">Confirm Password</label>
            }
          >
            <Input
              type="password"
              className="w-full h-[45px] !rounded-tl-lg !rounded-br-lg"
              placeholder="Confirm Password"
              required
            />
          </Form.Item>
          <div className="flex justify-between gap-2 items-center flex-col lg:flex-row">
            <Checkbox>I have read through the Terms and Policies</Checkbox>
            <p>
              Already have an acoount?{""}
              <Link to="/auth/sign-in" className="font-semibold underline">
                Sign In
              </Link>
            </p>
          </div>

          <div className="w-full flex justify-center items-center">
            <button
              type="submit"
              variant="large"
              className="!w-[400px] text-lg !rounded-none !rounded-tl-2xl !rounded-br-2xl !bg-dblue !text-white h-[50px] hover:!opacity-90 !font-semibold hover:!border-none active:scale-95"
            >
              Sign up
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
