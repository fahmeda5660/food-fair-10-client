import React from 'react';
import { Link } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';
import LazyLoad from 'react-lazy-load';
// import Placeholder from './Placeholder'; 


const ChefCard = ({ singleData }) => {
    const { chef_name, chef_picture, description, likes, years_experience, num_recipes, recipes } = singleData;
    return (
        <div className="card w-full md:w-96 lg:w-full bg-base-100 shadow-xl">
            {/* <figure>
                <img src={chef_picture} alt="Shoes" className="rounded-xl h-50 w-full" />
            </figure> */}
            <LazyLoad>
                <img alt="Chef Image"
                    effect="blur"
                    src={chef_picture}
                    className="rounded-xl h-50 w-full" />
            </LazyLoad>


            <div className="card-body text-left ">
                <h2 className="card-title text-2xl font-bold">{singleData.chef_name}</h2>
                <div className='text-lg font-medium text-[#5c5959]'>
                    <p>Years of Experience: {years_experience}</p>
                    <p>No. of Recipe: {num_recipes}</p>
                    <p>Likes: {likes}</p>
                </div>
                <div className="card-actions">
                    <Link to={`/${singleData.id}`}><button className="btn px-6 py-2 bg-warning text-white font-bold rounded-md outline-none border-none">View Recipes </button></Link>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;