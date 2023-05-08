import * as React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { NavLink } from "react-router-dom";

const drawerWidth = 240;

function DrawerAppBar(props) {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
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
      });
  }, []);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Team 1's Recipe Blog
      </Typography>
      <Divider />
      <List>
        <ListItem key="Home" disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <NavLink to="/">
              <ListItemText
                className="symbol"
                primary={
                  <Avatar
                    alt="Home Symbol"
                    src="https://cdn-icons-png.flaticon.com/512/609/609803.png"
                    variant="square"
                  />
                }
              />
            </NavLink>
          </ListItemButton>
        </ListItem>
        {recipes.map((recipe) => (
          <ListItem key={recipe.recipe_id} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <NavLink to={`/recipe/${recipe.recipe_id}`}>
                <ListItemText
                  className="symbol"
                  primary={
                    <Avatar
                      alt="Food Symbol"
                      src={recipe.symbol}
                      variant="square"
                    />
                  }
                />
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Team 1's Recipe Blog
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button key="Home" sx={{ color: "#fff" }}>
              <NavLink to="/">
                {
                  <Avatar
                    alt="Home Symbol"
                    src="https://cdn-icons-png.flaticon.com/512/609/609803.png"
                    variant="square"
                  />
                }
              </NavLink>
            </Button>

            {recipes.map((recipe) => (
              <Button key={recipe.recipe_id} sx={{ color: "#fff" }}>
                <NavLink to={`/recipe/${recipe.recipe_id}`}>
                  {
                    <Avatar
                      alt="Food Symbol"
                      src={recipe.symbol}
                      variant="square"
                    />
                  }
                </NavLink>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
