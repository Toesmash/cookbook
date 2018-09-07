import React from 'react';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';
import { editRecipe } from '../redux/actions/recipes';

const Edit = (props) => {
  return (
    <div>
      <RecipeForm
        recipe={props.recipe}
        onSubmit={(update) => {
          props.editRecipe(props.recipe.id, update)
          props.history.push('/')
        }}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  editRecipe: (id, update) => dispatch(editRecipe(id, update))
});

const mapStateToProps = (store, props) => ({
  recipe: store.recipes.find((item) => {
    return item.id == props.match.params.id;
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);