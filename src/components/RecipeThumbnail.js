import React from 'react';
import { Link } from 'react-router-dom';

const RecipeThumbnail = ({ id, title, rating }) => {
  return (
    <div>
      <p><Link to={`/view/${id}`}>{title}</Link></p>
      {rating.like && <span>like</span>}
      {rating.dislike && <span>dislike</span>}
    </div>
  );
}

export default RecipeThumbnail;