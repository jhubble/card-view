/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from './App';

describe('App Component', () => {
  it('should render without crashing', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<App />);
    const result = renderer.getRenderOutput();
    expect(result.type).toBe('div');
  });
});
