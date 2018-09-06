import React from 'react';
import { connect } from 'react-redux';
import RecipeThumbnail from './RecipeThumbnail';


const RecipeList = (props) => {
  return (
    <div>
      {
        props.recipes.length === 0 ? <p>No recipes</p> : (
          props.recipes.map((recipe) => (<RecipeThumbnail key={recipe.id} title={recipe.title} id={recipe.id} />))
        )
      }
    </div>
  );
}

const mapStateToProps = (store) => ({
  recipes: store.recipes
});

export default connect(mapStateToProps)(RecipeList);