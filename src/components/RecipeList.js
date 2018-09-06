import React from 'react';
import { connect } from 'react-redux';

const RecipeList = () => (
  <div>
    <h1>Recipe List</h1>
  </div>
);

const mapStateToProps = (store) => ({
  recipes: store.recipes
});

export default connect(mapStateToProps)(RecipeList);