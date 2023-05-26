import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='bg-black py-[50px] text-[#ffffffab]'>
            <div className='container mx-auto divide-y divide-[#ffffff3d]'>
                <div className='grid grid-cols-1 md:grid-cols-6 gap-5 pb-12'>
                    <ul className='md:col-span-2 col-span-1 md:text-left lg:text-left text-center'>
                        <li className='text-3xl text-white'><Link to='/'>About Curious World</Link></li>
                        <li className='my-3 leading-6'><i>Italian cuisine is a Mediterranean cuisine consisting of the ingredients, recipes and cooking techniques developed across the Italian Peninsula and later spread around the world together with waves of Italian diaspora.</i></li>
                    </ul>
                    <ul className='md:text-left lg:text-left text-center'>
                        <li className='footerTitle'>Recipes</li>
                        <li className='mt-[20px] flex items-center  justify-center md:justify-normal lg:justify-normal'><FaAngleRight></FaAngleRight><span>Browse Recipes</span></li>
                        <li className='flex items-center justify-center md:justify-normal lg:justify-normal'><FaAngleRight></FaAngleRight><span>Recipe Page</span></li>
                        <li className='flex items-center justify-center md:justify-normal lg:justify-normal'><FaAngleRight></FaAngleRight><span>Submit Recipe</span></li>
                    </ul>
                    <div className='md:col-span-3 lg:col-span-3 col-span-1 md:text-left lg:text-left text-center'>
                        <p className='footerTitle'>Newsletter </p>
                        <p className='mt-[20px]'>Sign up to receive email updates on new product announcements, gift ideas, sales and more.</p>
                        <div className='mt-3'>
                            <input className='px-3 py-2 rounded-md mr-3' type="email" name="email" id="email" placeholder="Enter you email address" />
                            <button className='px-6 py-2 bg-warning text-white font-bold rounded-md mt-3 md:mt-0 lg:mt-0'>SIGN UP</button>
                        </div>
                    </div>

                </div>
                <div className='text-center'>
                    <p className='mt-4'>@2023 FoodFair. All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;