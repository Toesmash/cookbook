import React from 'react';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';
import { addRecipe } from '../redux/actions/recipes';

const AddRecipe = (props) => {
  return (
    <div>
      <RecipeForm
        onSubmit={(recipe) => {
          props.addRecipe(recipe);
          props.history.push('/');
        }}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addRecipe: (recipe) => dispatch(addRecipe(recipe))
});

export default connect(undefined, mapDispatchToProps)(AddRecipe);