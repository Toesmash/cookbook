import React from 'react';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';
import { addRecipe } from '../redux/actions/recipes';

const AddRecipe = (props) => {
  return (
    <div>
      <RecipeForm
        onSubmit={(recipe) => {
          props.dispatch(addRecipe({
            id: new Date().getTime().toString(32),
            ...recipe
          }));
          props.history.push('/');
        }}
      />
    </div>
  );
}

export default connect()(AddRecipe);