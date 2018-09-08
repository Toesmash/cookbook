import dummyData from '../fixtures/dummyData';

const recipesReducer = (state = dummyData, action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return [...state, action.recipe];

    case 'EDIT_RECIPE':
      return state.map((recipe) => {
        if (recipe.id === action.id) {
          return {
            ...recipe,
            ...action.update
          }
        } else {
          return recipe;
        }
      });

    case 'REMOVE_RECIPE':
      return state.filter(({ id }) => (id !== action.id));

    case 'LIKE_RECIPE':
      return state.map((recipe) => {
        if (recipe.id === action.id) {
          return {
            ...recipe,
            rating: {
              like: !recipe.rating.like,
              dislike: false
            }
          }
        } else {
          return recipe;
        }
      });

    case 'DISLIKE_RECIPE':
      return state.map((recipe) => {
        if (recipe.id === action.id) {
          return {
            ...recipe,
            rating: {
              like: false,
              dislike: !recipe.rating.dislike
            }
          }
        } else {
          return recipe;
        }
      });

    default:
      return state;
  }
}

export default recipesReducer;