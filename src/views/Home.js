import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingIndicator from "../components/LoadingIndicator";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_BACKEND_URL}api/recipes`)
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
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {isLoading ? (
          <>
            <LoadingIndicator />
            <Modal show={true} centered>
              <Modal.Header>
                <Modal.Title>
                  I am using the free backend hosting on Render.com. It takes
                  ~1-2 minutes for the free server to spin back up if it has
                  been inactive for more than 15 minutes. Thanks for your
                  patience!
                </Modal.Title>
              </Modal.Header>
            </Modal>
          </>
        ) : recipes.length ? (
          recipes.map((recipe) => {
            return (
              <Grid item xs="auto">
                <Card
                  sx={{ maxWidth: 345, minWidth: 345, height: 345 }}
                  key={recipe.recipe_id}
                  id={recipe.recipe_id}
                >
                  <CardActionArea
                    onClick={handleOnClick}
                    id={recipe.recipe_id}
                    sx={{ maxWidth: 345, minWidth: 345, height: 345 }}
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={recipe.image_url}
                      alt={recipe.title}
                      id={recipe.recipe_id}
                    />
                    <CardContent id={recipe.recipe_id}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        id={recipe.recipe_id}
                      >
                        {recipe.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        id={recipe.recipe_id}
                      >
                        Prep Time: {recipe.prep_time} min
                        <br />
                        Cook Time: {recipe.cook_time} min
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })
        ) : (
          error
        )}
      </Grid>
    </Box>
  );
};

export default Home;
