import { useState } from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../../firebaseConfig'
import register from '../../images/register.png'

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCredential.user);
      alert('Verification email sent!');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='flex items-center'>
        <div className='bg-lblue min-h-[100vh]  w-1/2'>
          <img src={register} />
        </div>
        <div className=' pl-10'>
          <p>Already have an account? <u className='font-bold'>Sign In</u></p>
          <h1>Welcome to Abdul-Mujeeb BlockChain</h1>
          <p>Register your account</p>
          <form onSubmit={handleSignUp}>
            <label>Name</label>
            <div className='flex space-x-4 py-4'>
              <input
                className='w-48 py-2 pl-2 rounded-tl-lg rounded-br-lg  border-2 border-dblue'
                type="name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="First Name"
              />
              <input
                className='w-48 py-2 pl-2 rounded-tl-lg rounded-br-lg  border-2 border-dblue'
                type="name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Last Name"
              />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button type="submit">Sign Up</button>
            {error && <p>{error}</p>}
          </form>
        </div>
      </div>
    
  );
}

export default SignUp;