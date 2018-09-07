import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeRecipe } from '../redux/actions/recipes';

const Recipe = (props) => {
  const { title, ingredients, instructions, id } = props.recipe;
  return (
    <div>
      <p>{title}</p>
      <p>{ingredients}</p>
      <p>{instructions}</p>
      <button><Link to={`/edit/${id}`}>Edit Recipe</Link></button>
      <button
        onClick={() => {
          props.removeRecipe(id);
          props.history.push('/');
        }}
      >Delete Recipe</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  removeRecipe: (id) => dispatch(removeRecipe(id))
});

const mapStateToProps = (store, props) => ({
  recipe: store.recipes.find((item) => {
    return item.id == props.match.params.id;
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);