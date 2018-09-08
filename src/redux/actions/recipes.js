

// ADD RECIPE
export const addRecipe = (recipe) => ({
  type: 'ADD_RECIPE',
  recipe: {
    id: new Date().getTime().toString(32),
    ...recipe,
    rating: {
      like: false,
      dislike: false
    }
  }
});

// EDIT RECIPE
export const editRecipe = (id, update) => ({
  type: 'EDIT_RECIPE',
  id,
  update
});

// REMOVE RECIPE
export const removeRecipe = (id) => ({
  type: 'REMOVE_RECIPE',
  id
});

// LIKE RECIPE
export const likeRecipe = (id) => ({
  type: 'LIKE_RECIPE',
  id
});

// DISLIKE RECIPE
export const dislikeRecipe = (id) => ({
  type: 'DISLIKE_RECIPE',
  id
});