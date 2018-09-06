import { createStore, combineReducers } from 'redux';
import recipesReducer from '../reducers/recipes';


const configureStore = () => {
  const store = createStore(
    combineReducers({
      recipes: recipesReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
}

export default configureStore;