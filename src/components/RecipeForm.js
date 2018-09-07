import React from 'react';


export default class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.recipe ? props.recipe.title : '',
      feeds: props.recipe ? props.recipe.feeds : '',
      preparation: props.recipe ? props.recipe.preparation : '',
      ingredients: props.recipe ? props.recipe.ingredients : [],
      instructions: props.recipe ? props.recipe.instructions : [],
      error: ''
    };
  }

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }))
  }
  onFeedsChange = (e) => {
    const feeds = e.target.value;
    this.setState(() => ({ feeds }))

  }
  onPrepChange = (e) => {
    const preparation = e.target.value;
    this.setState(() => ({ preparation }))

  }
  onInstructionChange = (e) => {
    const instructions = e.target.value;
    this.setState(() => ({ instructions: instructions.split("\n") }))
  }
  onIngredientsChange = (e) => {
    const ingredients = e.target.value;
    this.setState(() => ({ ingredients: ingredients.split("\n") }))
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.title || !this.state.ingredients || !this.state.instructions) {
      this.setState(() => ({ error: 'Please set correct' }))
    }
    else {
      this.setState(() => ({
        error: ''
      }))
      this.props.onSubmit({
        title: this.state.title,
        feeds: this.state.feeds,
        preparation: this.state.preparation,
        ingredients: this.state.ingredients.filter((item) => (item)),
        instructions: this.state.instructions.filter((item) => (item))
      })
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            autoFocus
            type="text"
            name="title"
            placeholder="Title"
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <input
            type="text"
            name="feeds"
            placeholder="2"
            value={this.state.feeds}
            onChange={this.onFeedsChange}
          />
          <input
            type="text"
            name="preparation"
            placeholder="60"
            value={this.state.preparation}
            onChange={this.onPrepChange}
          />
          <textarea
            placeholder="Ingredients"
            value={this.state.ingredients.join("\n")}
            onChange={this.onIngredientsChange}
          />
          <textarea
            placeholder="Instructions"
            value={this.state.instructions.join("\n")}
            onChange={this.onInstructionChange}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}


