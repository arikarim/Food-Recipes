import React from 'react';
import { Link } from 'react-router-dom';
import './Component.css';

const Header = () => (
  <header className="header text-decoration-none">
    <Link className="link" to="/"><h1 className="header__title text-decoration-none">FoodSearch</h1></Link>
  </header>
);

export default Header;
