import React from 'react';
import { Link } from 'react-router-dom';
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa'

const RecipeThumbnail = ({ id, title, rating }) => {
    return (
        <Link className='list__item' to={`/view/${id}`}>
            {title.toUpperCase()}
            {rating.like && <span className='list__rating list__rating--up'><FaThumbsUp /></span>}
            {rating.dislike && <span className='list__rating list__rating--down'><FaThumbsDown /></span>}
        </Link>
    );
}

export default RecipeThumbnail;


