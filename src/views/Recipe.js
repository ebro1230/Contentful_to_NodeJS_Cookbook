import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../src/App.css";
import LoadingIndicator from "../components/LoadingIndicator";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";

const Recipe = () => {
  const { recipeId } = useParams();
  const [error, setError] = useState(null);
  const [recipe, setRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  let i = 1;
  const style = {
    width: "100%",
    justifyContent: "center",
    display: "grid",
    bgcolor: "background.paper",
  };
  const style2 = {
    width: "80%",
    justifyContent: "center",
    display: "grid",
    bgcolor: "background.paper",
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_BACKEND_URL}api/recipes/${recipeId}`)
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
  }, [recipeId]);

  console.log(recipe);
  console.log(error, "error");
  return (
    <div>
      {isLoading ? (
        <LoadingIndicator />
      ) : recipe.title ? (
        <div>
          <h1>{recipe.title}</h1>
          <p className="description">{recipe.description}</p>
          <p>Prep Time: {recipe.prep_time} minutes</p>
          <p>Cook Time: {recipe.cook_time} minutes</p>
          <img src={recipe.image_url} />
          <div className="ingredients">
            <h2>Ingredients</h2>
            <List sx={style} component="nav" aria-label="ingredients list">
              {recipe.ingredients.map((ingredient) => (
                <>
                  <ListItem>
                    <ListItemText primary={ingredient} />
                  </ListItem>
                  <Divider />
                </>
              ))}
            </List>
          </div>
          <div className="directions">
            <h2>Directions</h2>
            <Container maxwidth="lg">
              <List sx={style} component="nav" aria-label="directions list">
                {recipe.directions.map((direction) => (
                  <>
                    <ListItem>
                      <ListItemText primary={`${i++}. ${direction}`} />
                    </ListItem>
                    <Divider />
                  </>
                ))}
              </List>
            </Container>
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
