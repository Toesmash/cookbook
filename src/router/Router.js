import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CreateRecipe from '../components/CreateRecipe';
import RecipeList from '../components/RecipeList';
import EditRecipe from '../components/EditRecipe';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';

const Router = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={RecipeList} exact />
        <Route path="/create" component={CreateRecipe} />
        <Route path="/edit/:id" component={EditRecipe} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;