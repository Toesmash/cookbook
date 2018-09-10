import React from 'react';
import { connect } from 'react-redux';
import RecipeThumbnail from './RecipeThumbnail';


export const RecipeList = (props) => {
  return (
    <div className='main-container main-container--list'>
      <h2 className='list__title'>List of recipes</h2>
      <div className='list__grid'>
        {
          props.recipes.length === 0 ? <p className='list__empty'>No recipes</p> : (
            props.recipes.map((recipe) => (
              <RecipeThumbnail key={recipe.id} {...recipe} />))
          )
        }
      </div>
    </div>
  );
}

const mapStateToProps = (store) => ({
  recipes: store.recipes
});

export default connect(mapStateToProps)(RecipeList);