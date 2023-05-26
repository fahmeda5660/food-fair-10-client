import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChefRecipeDetails = ({ singleRecipe }) => {
  const { recipe_img, recipe_name, country, ingredients, cooking_method, rating } = singleRecipe;
  const [accepted, setAccepted] = useState(false);

  const handleFavourite = event => {
    setAccepted(true);
    toast("Favourite Recipe added!");

  }

  return (
    <div className="card w-96 bg-[#f6f6f6] shadow-xl relative mt-24 mb-16">
      <figure className="px-10 pt-10">
        <img src={recipe_img} alt="Shoes" className="rounded-full w-48 h-48 absolute left-24 -top-24" />
      </figure>
      <div className="card-body text-left mt-16">
        <h2 className="card-title text-2xl font-bold">{recipe_name}</h2>
        <p className='text-xl font-bold'><i>{country}</i></p>
        <div className='text-lg font-medium text-[#5c5959]'>
          <div>Ingredients:
            {
              ingredients.map((ingredient, idx) => <li key={idx} style={{ listStyleType: "decimal" }}>{ingredient}</li>)
            }
          </div>

          <div>Cooking Method:
            <p>{cooking_method}</p>
          </div>
          <p>Ratings: {rating}</p>
        </div>
        <button onClick={handleFavourite} disabled={accepted} className="btn gap-2 bg-warning text-white font-bold outline-none border-none">
          Favourite Recipe
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ChefRecipeDetails;