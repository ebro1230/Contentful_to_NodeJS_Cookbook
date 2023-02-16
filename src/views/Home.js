import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingIndicator from "../components/LoadingIndicator";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `http://cdn.contentful.com/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`
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
        setRecipes(json.items);
      })
      .catch((error) => {
        setError(`${error}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleOnClick = (e) => {
    console.log(e.target.id);
    navigation(`/recipe/${e.target.id}`);
  };

  return (
    <div>
      <h1>Team 1's Recipe Blog</h1>
      {isLoading ? (
        <LoadingIndicator />
      ) : recipes.length ? (
        recipes.map((recipe) => {
          return (
            <>
              <Card
                sx={{ maxWidth: 345 }}
                key={recipe.sys.id}
                id={recipe.sys.id}
              >
                <CardActionArea onClick={handleOnClick} id={recipe.sys.id}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={recipe.fields.imageUrl}
                    alt={recipe.fields.title}
                    id={recipe.sys.id}
                  />
                  <CardContent id={recipe.sys.id}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      id={recipe.sys.id}
                    >
                      {recipe.fields.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      id={recipe.sys.id}
                    >
                      Prep Time: {recipe.fields.prepTime} min
                      <br />
                      Cook Time: {recipe.fields.cookTime} min
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </>
          );
        })
      ) : (
        error
      )}
    </div>
  );
};

export default Home;
