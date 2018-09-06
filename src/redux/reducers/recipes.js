const dummyData = [
  {
    id: 1,
    title: 'halusky',
    feeds: 4,
    preparation: 60,
    ingredients: ['1kg zemiaky', '300g hladka muka', 'sol', '250g bryndza', '100g slaninka'],
    instructions: ['Ocistit zemiaky, nastruhat, pridat muku a sol', 'Zamiesit cesto', 'Vlozit do vriacej vody', 'Zmiesat s bryndzou'],
    rating: true
  },
  {
    id: 2,
    title: 'Parky',
    feeds: 4,
    preparation: 20,
    ingredients: ['Parky', 'Kecup'],
    instructions: ['Vlozit parky do vriacej vody', 'Pridat kecup'],
    rating: false
  }
];

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
        }
        else {
          return recipe;
        }
      });

    case 'REMOVE_RECIPE':
      return state.filter(({ id }) => (id !== action.id));

    default:
      return state;
  }
}

export default recipesReducer;