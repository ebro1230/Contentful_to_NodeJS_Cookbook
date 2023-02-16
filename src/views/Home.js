import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    fetch(
      `http://cdn.contentful.com/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`
    )
      .then((res) => res.json())
      .then((data) => setRecipe(data.items));
    console.log(recipe);
  }, []);

  console.log(recipe);

  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/recipe">Recipe</Link>
    </div>
  );
};

export default Home;
