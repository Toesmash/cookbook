import React from 'react';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';
import { editRecipe } from '../redux/actions/recipes';

const Edit = (props) => {
  return (
    <div>
      <RecipeForm
        recipe={props.recipe}
        onSubmit={(recipe) => {
          props.dispatch(editRecipe(props.recipe.id, recipe));
          props.history.push('/')
        }}
      />
    </div>
  );
}

const mapStateToProps = (store, props) => ({
  recipe: store.recipes.find((item) => {
    return item.id == props.match.params.id;
  })
});

export default connect(mapStateToProps)(Edit);