import React from 'react';
import renderer from 'react-test-renderer';
import { TableComponent } from '../table';

it('renders correctly with empty value', () => {
  const data = [];
  const tree = renderer.create(<TableComponent data={data}></TableComponent>).toJSON();
  expect(tree).toMatchSnapshot();
});
