import React from 'react';
import { Link } from 'react-router-dom';

const RecipeThumbnail = ({ id, title }) => {
  return (
    <div>
      <Link to={`/view/${id}`}>{title}</Link>
    </div>
  );
}

export default RecipeThumbnail;