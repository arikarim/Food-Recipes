import React from 'react';
import { Link } from 'react-router-dom';
import './Component.css';

const Footer = () => (
  <footer className="header text-decoration-none ">
    <Link className="link" to="/"><h1 className="header__title text-decoration-none">FoodRecipe</h1></Link>
    <span className="span">Ari Karim</span>
  </footer>
);

export default Footer;
