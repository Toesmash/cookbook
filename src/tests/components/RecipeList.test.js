import { shallow } from 'enzyme';
import React from 'react';
import { RecipeList } from '../../components/RecipeList';
import dummyData from '../../redux/fixtures/dummyData';

test('Render RecipeList with data', () => {
  const wrapper = shallow(<RecipeList recipes={dummyData} />);
  expect(wrapper).toMatchSnapshot();
});

test('Render RecipeList without data', () => {
  const wrapper = shallow(<RecipeList recipes={[]} />);
  expect(wrapper).toMatchSnapshot();
});