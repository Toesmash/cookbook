import { addRecipe, editRecipe, removeRecipe } from '../../../redux/actions/recipes';

test('Remove recipe action object', () => {
  const action = removeRecipe('12345678');
  expect(action).toEqual({
    type: 'REMOVE_RECIPE',
    id: '12345678'
  })
});

test('Edit recipe action object', () => {
  const action = editRecipe('12345678', { title: 'Updated title' });
  expect(action).toEqual({
    type: 'EDIT_RECIPE',
    id: '12345678',
    update: {
      title: 'Updated title'
    }
  });
});

test('Add recipe action object', () => {
  const data = {
    title: 'Some Title',
    feeds: 2,
    preparation: 60,
    ingredients: ['Ingredient 1', 'Ingredient 2'],
    instructions: ['Instruction 1', 'Instruction 2']
  };
  const action = addRecipe(data);
  expect(action).toEqual({
    type: 'ADD_RECIPE',
    recipe: {
      id: expect.any(String),
      ...data
    }
  })
});