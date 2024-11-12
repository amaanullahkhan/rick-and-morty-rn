import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

describe('<App />', () => {
  const tree = renderer.create(<App />).toJSON();
  
  it('has 2 child', () => {
    expect(tree.children.length).toBe(2);
  });

  it('has Hello string in first child', () => {
    expect(tree.children[0].children).toStrictEqual(['Hello']);
  });
});

