import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";
import register from "../../images/register.png";
import { LogoText } from "../LogoText";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await sendEmailVerification(userCredential.user);
      alert("Verification email sent!");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex">
      <div className="absolute w-full flex justify-between items-center z-10 top-0 p-6 py-8">
        <LogoText />
        <p>
          Already have an acoount?{""}
          <Link to="/auth/sign-in" className="font-semibold underline">
            Sign In
          </Link>
        </p>
      </div>
      <div className="bg-lblue min-h-[100vh]  w-1/2 flex justify-center items-center">
        <img
          className="mx-auto mt-10 py-8"
          src={register}
          alt="Register your account"
          width={500}
        />
      </div>
      <div className="px-12">
        {/* <p className='text-right'>Already have an account? <u className='font-bold'>Sign In</u></p> */}
        <h1 className="text-3xl py-3 font-bold">
          Welcome to Abdul-Mujeeb BlockChain
        </h1>
        <p className="pb-4">Register your account</p>
        <form onSubmit={handleSignUp}>
          <label className="mb-4 font-bold">Name</label>
          <div className="space-x-4">
            <input
              className="w-48 py-2 pl-2 rounded-tl-lg rounded-br-lg  border-2 border-dblue"
              type="name"
              value={email}
              // onChange={(e) => setEmail(e.target.value)}
              placeholder="First Name"
            />
            <input
              className="w-48 py-2 pl-2 rounded-tl-lg rounded-br-lg  border-2 border-dblue"
              type="name"
              value={email}
              // onChange={(e) => setEmail(e.target.value)}
              placeholder="Last Name"
            />
          </div>
          <label className="mb-4 font-bold">Email Address</label>
          <div className="">
            <input
              type="email"
              value={email}
              // onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full py-2 my-3 pl-2 rounded-tl-lg rounded-br-lg  border-2 border-dblue"
            />
          </div>
          <label className="mb-4 font-bold">Email Address</label>
          <div>
            <input
              type="password"
              value={password}
              // onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-3/4 py-2 pl-2 rounded-tl-lg rounded-br-lg  border-2 border-dblue"
            />
          </div>
          <button type="submit">Sign Up</button>
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
