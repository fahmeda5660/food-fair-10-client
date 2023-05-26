import React from 'react';
import serviceImg from "../../assets/service.jpg"
import { FaBriefcase, FaRegCalendarAlt, FaShoppingCart, FaTruck } from 'react-icons/fa';

const Service = () => {
    return (
        <div className='container mx-auto mt-16'>
            <div className='text-center '><h2 className='text-3xl font-semibold'>Our Services</h2>
                <p className='mt-4 text-xl'><i>A Chef's Life is a half-hour character-driven documentary <br /> and cooking series that takes viewers inside the <br />  life of Chef Vivian Howard.</i></p></div>
            <div className='grid md:grid-cols-12 gap-4 justify-center items-center'>

                <div className='col-span-1 md:col-span-3 lg:col-span-3 flex items-center'>
                    <div className=''>
                        <div className='md:text-right lg:text-right text-center mt-8 md:mt-0 lg:mt-0'>
                            <span className='flex md:justify-end lg:justify-end justify-center text-warning text-5xl'><FaTruck></FaTruck></span>
                            <h5 className='text-2xl font-semibold my-2'>Online Booking</h5>
                            <p><i>It includes restaurants, school and hospital cafeterias, catering operations, and many other formats.</i></p>
                        </div>
                        <div className='md:text-right lg:text-right text-center mt-16'>
                            <span className='flex md:justify-end lg:justify-end justify-center text-warning text-5xl'><FaBriefcase></FaBriefcase></span>
                            <h5 className='text-2xl font-semibold my-2'>Get cooking with us</h5>
                            <p><i>It includes restaurants, school and hospital cafeterias, catering operations, and many other formats.</i></p>
                        </div>
                    </div>
                </div>

                <div className='col-span-1 md:col-span-6 mx-auto mt-8' >
                    <img src={serviceImg} alt="" />
                </div>

                <div className='col-span-1 md:col-span-3 lg:col-span-3 flex items-center'>
                    <div>
                        <div className='md:text-left lg:text-left text-center'>
                            <span className='flex md:justify-start lg:justify-start justify-center text-warning text-5xl'><FaShoppingCart></FaShoppingCart></span>
                            <h5 className='text-2xl font-semibold my-2'>Shopping Seafood</h5>
                            <p><i>It includes restaurants, school and hospital cafeterias, catering operations, and many other formats.</i></p>
                        </div>
                        <div className='md:text-left lg:text-left text-center mt-16'>
                            <span className='flex md:justify-start lg:justify-start justify-center text-warning text-5xl'><FaRegCalendarAlt></FaRegCalendarAlt></span>
                            <h5 className='text-2xl font-semibold my-2'>Recipes of the month</h5>
                            <p className='mb-11 md:mb-0 lg:mb-0'><i>It includes restaurants, school and hospital cafeterias, catering operations, and many other formats.</i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;