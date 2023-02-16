import React from 'react'
import { Link } from 'react-router-dom'
import "../../src/App.css"
import Navbar from './Navbar'



const Header = () => {
  return (
    <div className='header'
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        margin: "10px",
        color: "white",
      }}
    >
      <h1>Recipe Blog</h1>
      <Navbar />
    </div>
  );
};

export default Header;
