import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaUtensils, FaStopwatch, FaThumbsDown, FaThumbsUp } from 'react-icons/fa';
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
    const { title, ingredients, instructions, id, feeds, preparation, rating } = this.props.recipe;
    return (
      <div className='main-container'>
        <h2 className='recipe__title'>{title.toUpperCase()}</h2>
        <div className='recipe__info'>
          <span><FaUtensils />: {feeds} {feeds === 1 ? 'portion' : 'portions'}</span>
          <span><FaStopwatch />: {preparation} minutes</span>
        </div>
        <div className='recipe__content'>
          <div className='recipe__ingredients'>
            <h3>Ingredients</h3>
            {
              ingredients.map((item, index) => {
                return <p key={index}>- {item}</p>
              })
            }
          </div>
          <div className='recipe__instructions'>
            <h3>Instructions</h3>
            {
              instructions.map((item, index) => {
                return (
                  <div className='recipe__steps' key={index}>
                    <span className='recipe__index'>{index + 1}.</span>
                    <div>
                      {item}
                    </div>
                  </div>
                )
                // return <p key={index} className='recipe__step'><span className='recipe__index'>{index + 1}.</span> {item}</p>
              })
            }
          </div>

        </div>
        <div className='recipe__actions'>
          <div className='buttons'>
            <button className={rating.like ? 'button button--rating button--up button--like' : 'button button--rating button--up'} onClick={this.onLike}><FaThumbsUp /></button>
            <button className={rating.dislike ? 'button button--rating button--down button--dislike' : 'button button--rating button--down'} onClick={this.onDislike}><FaThumbsDown /></button>
          </div>
          <div className='buttons'>
            <Link to={`/edit/${id}`}><button className='button button--edit'>Edit Recipe</button></Link>
            <button className='button button--delete' onClick={this.onRemove} >Delete Recipe</button>
          </div>
        </div>
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