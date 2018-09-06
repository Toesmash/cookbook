

// ADD RECIPE
export const addRecipe = (recipe) => ({
  type: 'ADD_RECIPE',
  recipe
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