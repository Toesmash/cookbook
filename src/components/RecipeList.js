import React from 'react';
import { connect } from 'react-redux';
import RecipeThumbnail from './RecipeThumbnail';


export const RecipeList = (props) => {
  return (
    <div>
      <h1>Title</h1>
      {
        props.recipes.length === 0 ? <p>No recipes</p> : (
          props.recipes.map((recipe) => (
            <RecipeThumbnail key={recipe.id} {...recipe} />))
        )
      }
    </div>
  );
}

const mapStateToProps = (store) => ({
  recipes: store.recipes
});

export default connect(mapStateToProps)(RecipeList);