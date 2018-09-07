import recipeReducer from '../../../redux/reducers/recipes';
import dummyData from '../../../redux/fixtures/dummyData';

test('Default state configuration', () => {
  const state = recipeReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual(dummyData);
});

test('Remove recipe - valid id', () => {
  const action = {
    type: 'REMOVE_RECIPE',
    id: '2'
  };
  const state = recipeReducer(dummyData, action);
  expect(state).toEqual([dummyData[0]]);
});

test('Remove recipe - invalid id', () => {
  const action = {
    type: 'REMOVE_RECIPE',
    id: '0'
  };
  const state = recipeReducer(dummyData, action);
  expect(state).toEqual(dummyData);
});

test('Edit recipe - valid id', () => {
  const action = {
    type: 'EDIT_RECIPE',
    id: '1',
    update: {
      instructions: ['instruction 1', 'instruction 2']
    }
  };
  const state = recipeReducer(dummyData, action);
  expect(state[0].instructions).toEqual(action.update.instructions);
});

test('Edit recipe - invalid id', () => {
  const action = {
    type: 'EDIT_RECIPE',
    id: '0',
    update: {
      title: 'Unreachable'
    }
  };
  const store = recipeReducer(dummyData, action);
  expect(store).toEqual(dummyData);
})

test('Add recipe', () => {
  const recipe = {
    id: '3',
    title: 'Title',
    ingredients: ['ingredient 1', 'ingredient 2'],
    instructions: ['instruction 1', 'instruction 2'],
    feeds: 2,
    preparation: 60
  };
  const action = {
    type: 'ADD_RECIPE',
    recipe
  };
  const state = recipeReducer(dummyData, action);
  expect(state).toEqual([...dummyData, recipe]);
});