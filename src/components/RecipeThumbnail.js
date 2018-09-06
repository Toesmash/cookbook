import React from 'react';
import { Link } from 'react-router-dom';

const RecipeThumbnail = (props) => {
  return (
    <div>
      <Link to={`/view/${props.id}`}>{props.title}</Link>
    </div>
  );
}

export default RecipeThumbnail;