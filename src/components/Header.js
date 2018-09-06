import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/"><h1>CookBook</h1></Link>
    <Link to="/create">Create Recipe</Link>
  </header>
);

export default Header;