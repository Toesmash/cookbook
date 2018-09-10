import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className='notfound__msg'>
    <h1>Page not found :(</h1>
    <p><Link to="/">Go home</Link></p>
  </div>
);

export default NotFound;