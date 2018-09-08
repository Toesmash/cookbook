import React from 'react';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';
import { editRecipe } from '../redux/actions/recipes';

export class EditRecipe extends React.Component {
  onSubmit = (recipe) => {
    this.props.editRecipe(this.props.recipe.id, recipe);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <RecipeForm
          recipe={this.props.recipe}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
  editRecipe: (id, update) => dispatch(editRecipe(id, update))
});

const mapStateToProps = (store, props) => ({
  recipe: store.recipes.find((item) => {
    return item.id == props.match.params.id;
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(EditRecipe);