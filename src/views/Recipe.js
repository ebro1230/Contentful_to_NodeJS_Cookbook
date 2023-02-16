import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../src/App.css"
const Recipe = () => {
    const {recipeId} = useParams()
    const [error, setError] = useState(null)
    const [recipe, setRecipe] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true);
        fetch(
          `http://cdn.contentful.com/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/environments/master/entries/${recipeId}?access_token=${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`
        )
          .then((response) => {
            if (!response.ok) {
              return setError(`HTTP Status Error: ${response.status}`);
            } else {
              return response;
            }
          })
          .then((response) => response.json())
          .then((json) => {
            setRecipe(json);
        console.log(json)  
        })
          .catch((error) => {
            setError(`${error}`);
          })
          .finally(() => {
            setIsLoading(false);
          });
      }, []);
    
console.log(recipe)
console.log(error, "error")
  return (
    <div>

      {recipe.fields ? ( 
        <div>
      <h1>{recipe.fields.title}</h1> 
      <p className="description">{recipe.fields.description}</p>
      <p>Prep Time: {recipe.fields.prepTime} minutes</p>
      <p>Cook Time: {recipe.fields.cookTime} minutes</p>
      <img src={recipe.fields.imageUrl} />
        <div className="ingredients">
        <h2>Ingredients</h2>
      <p>{recipe.fields.ingredients.map((ingredient) => <li>{ingredient}</li>)}</p>
      </div>
      <div className="directions">
      <h2>Directions</h2>
      <ol>
        {recipe.fields.directions.map((direction) => <li>{direction}</li>)}</ol>
            </div>
      </div>
      ) : error
    }
        

    </div>
  );
};

export default Recipe;

/* */