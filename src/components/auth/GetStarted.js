import React from 'react'
import home from '../../images/logo1.png'

import { useNavigate } from 'react-router-dom';


const GetStarted = () => {
  const navigate = useNavigate() 
  return (
    <div>
      {/* <nav>
        <img src={logo} alt='logo'/>
      </nav> */}
      <div className='flex items-center'>
        <div className='bg-welcome bg-no-repeat min-h-[100vh] bg-center bg-auto w-1/2'>1</div>
        <div className='mx-auto items-center justify-center'>
          <img src={home} alt='get started' />
          <h1 className='text-2xl font-bold'>Welcome to Abdul-Mujeeb BlockChain</h1>
          <p>A blockchain that allows Shariah Financial Transactions</p> 

          <div className='my-4'>            
            <button 
              className='rounded-tl-lg rounded-br-lg bg-dblue text-white px-32 py-3'
              onClick={()=>navigate("/sign-in")}
            >
              Sign In
            </button>
          </div>         
          <div className='my-4'>
            <button 
              className='rounded-tl-lg rounded-br-lg px-32 py-3 border-2 border-dblue'
              onClick={()=>navigate("/sign-up")}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetStarted