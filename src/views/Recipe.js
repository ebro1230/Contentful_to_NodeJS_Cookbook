import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../src/App.css";
const Recipe = () => {
  const { recipeId } = useParams();
  const [error, setError] = useState(null);
  const [recipe, setRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:8000/api/recipes/${recipeId}`)
      .then((response) => {
        if (!response.ok) {
          return setError(`HTTP Status Error: ${response.status}`);
        } else {
          return response;
        }
      })
      .then((response) => response.json())
      .then((json) => {
        setRecipe(json[0]);
        console.log(json[0]);
      })
      .catch((error) => {
        setError(`${error}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  console.log(recipe);
  console.log(error, "error");
  return (
    <div>
      {recipe.title ? (
        <div>
          <h1>{recipe.title}</h1>
          <p className="description">{recipe.description}</p>
          <p>Prep Time: {recipe.prep_time} minutes</p>
          <p>Cook Time: {recipe.cook_time} minutes</p>
          <img src={recipe.image_url} />
          <div className="ingredients">
            <h2>Ingredients</h2>
            <p>
              {recipe.ingredients.map((ingredient) => (
                <li>{ingredient}</li>
              ))}
            </p>
          </div>
          <div className="directions">
            <h2>Directions</h2>
            <ol>
              {recipe.directions.map((direction) => (
                <li>{direction}</li>
              ))}
            </ol>
          </div>
        </div>
      ) : (
        error
      )}
    </div>
  );
};

export default Recipe;

/* */
