import React, { useState, useEffect } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import Avatar from "@mui/material/Avatar";

const Navbar = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}api/recipes`, {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        if (!response.ok) {
          return setError(`HTTP Status Error: ${response.status}`);
        } else {
          return response;
        }
      })
      .then((response) => response.json())
      .then((json) => {
        setRecipes(json);
      })
      .catch((error) => {
        setError(`${error}`);
      });
  }, []);

  return (
    <BottomNavigation showLabels>
      <NavLink to="/">
        <BottomNavigationAction
          label="Home"
          icon={
            <Avatar
              alt="Home Symbol"
              src="https://cdn-icons-png.flaticon.com/512/609/609803.png"
              variant="square"
            />
          }
        />
      </NavLink>
      <>
        {recipes.length
          ? recipes.map((recipe) => {
              return (
                <NavLink to={`/recipe/${recipe.recipe_id}`}>
                  <BottomNavigationAction
                    label="Recipe"
                    icon={
                      <Avatar
                        alt="Food Symbol"
                        src={recipe.symbol}
                        variant="square"
                      />
                    }
                  />
                </NavLink>
              );
            })
          : error}
      </>
    </BottomNavigation>
  );
};

export default Navbar;
