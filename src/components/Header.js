import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className='header'>
    <div className='main-container'>
      <div className='header__content'>
        <Link className='header__title' to="/"><h1>CookBook</h1></Link>
        <Link className='header__recipe' to="/create">Add Recipe</Link>
      </div>
    </div>
  </header>
);

export default Header;