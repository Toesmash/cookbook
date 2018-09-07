import { shallow } from 'enzyme';
import React from 'react';
import RecipeThumbnail from '../../components/RecipeThumbnail';
import dummyData from '../../redux/fixtures/dummyData';

test('Render RecipeThumbnail', () => {
  const wrapper = shallow(<RecipeThumbnail {...dummyData[0]} />);
  expect(wrapper).toMatchSnapshot();
});