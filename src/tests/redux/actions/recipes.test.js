import { addRecipe, editRecipe, removeRecipe, likeRecipe, dislikeRecipe } from '../../../redux/actions/recipes';

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
      ...data,
      rating: {
        like: false,
        dislike: false
      }
    }
  })
});

test('Like recipe action object', () => {
  const action = likeRecipe('12345678');
  expect(action).toEqual({
    type: 'LIKE_RECIPE',
    id: '12345678'
  })
});

test('Dislike recipe action object', () => {
  const action = dislikeRecipe('12345678');
  expect(action).toEqual({
    type: 'DISLIKE_RECIPE',
    id: '12345678'
  })
});