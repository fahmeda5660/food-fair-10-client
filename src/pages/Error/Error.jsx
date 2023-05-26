import React from 'react';
import bgImg from "../../assets/circle-pattern-bg.jpg"
import errorImg from "../../assets/error.png"
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const { error, status } = useRouteError()
  return (
    <section className='flex items-center h-screen p-16  text-gray-900' style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
      {/* <div><img src={errorImg} alt="" /></div> */}
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <h2 className='text-purple-800 font-extrabold text-[64px]'>Oops</h2>
        <div className='max-w-md text-center'>
        <img src={errorImg} alt="" />
          <p className='text-2xl font-semibold md:text-3xl text-red-600 mb-8'>
            {error?.message}
          </p>
          <Link to='/' className='btn'>
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Error;