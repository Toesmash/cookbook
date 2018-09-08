import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeRecipe, likeRecipe, dislikeRecipe } from '../redux/actions/recipes';


export class Recipe extends React.Component {
  onRemove = () => {
    this.props.removeRecipe(this.props.recipe.id);
    this.props.history.push('/');
  };
  onLike = () => {
    this.props.likeRecipe(this.props.recipe.id)
  };
  onDislike = () => {
    this.props.dislikeRecipe(this.props.recipe.id)
  };

  render() {
    const { title, ingredients, instructions, id } = this.props.recipe;
    return (
      <div>
        <p>{title}</p>
        <p>{ingredients}</p>
        <p>{instructions}</p>
        <button><Link to={`/edit/${id}`}>Edit Recipe</Link></button>
        <button onClick={this.onRemove} >Delete Recipe</button>
        <button onClick={this.onLike}>Like</button>
        <button onClick={this.onDislike}>Dislike</button>
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeRecipe: (id) => dispatch(removeRecipe(id)),
  likeRecipe: (id) => dispatch(likeRecipe(id)),
  dislikeRecipe: (id) => dispatch(dislikeRecipe(id))
});

const mapStateToProps = (store, props) => ({
  recipe: store.recipes.find((item) => {
    return item.id == props.match.params.id;
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);