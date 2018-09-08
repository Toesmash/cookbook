import React from 'react';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';
import { addRecipe } from '../redux/actions/recipes';

export class AddRecipe extends React.Component {
  onSubmit = (recipe) => {
    this.props.addRecipe(recipe);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <RecipeForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  };
}

const mapDispatchToProps = (dispatch) => ({
  addRecipe: (recipe) => dispatch(addRecipe(recipe))
});

export default connect(undefined, mapDispatchToProps)(AddRecipe);