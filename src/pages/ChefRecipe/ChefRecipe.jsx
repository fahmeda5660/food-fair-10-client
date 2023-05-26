import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import bannerBg from "../../assets/circle-pattern-bg.jpg"
import ChefRecipeDetails from '../ChefRecipeDetails/ChefRecipeDetails';

const ChefRecipe = () => {
    const { id } = useParams();
    const chefRecipe = useLoaderData();
    console.log(chefRecipe);
    const { chef_name, chef_picture, description, likes, years_experience, num_recipes, recipes } = chefRecipe;
    return (
        <div>
            <div className='' style={{ backgroundImage: `url(${bannerBg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                {/* <h2>chef recipes page coming{chefRecipe.length}</h2> */}
                <div className='mb-8 container mx-auto py-16' >
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure><img className='w-full h-full min-h-[100px]' src={chef_picture} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-bold">{chef_name}</h2>
                            <div className='text-lg font-medium text-[#5c5959]'>
                                <p>{description}</p>
                                <p>Likes: {likes}</p>
                                <p>No. of Recipes: {num_recipes}</p>
                                <p>Years of Experience: {years_experience}</p>
                            </div>
                            {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div> */}
                        </div>
                    </div>
                </div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 container mx-auto'>
                {
                    chefRecipe.recipes.map((singleRecipe, idx) => <ChefRecipeDetails key={idx} singleRecipe={singleRecipe}></ChefRecipeDetails>)
                }
            </div>
        </div>
    );
};

export default ChefRecipe;