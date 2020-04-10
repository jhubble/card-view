/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ElderCard from './ElderCard';

describe('ElderCard Component', () => {
  it('should render without crashing', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<ElderCard imageUrl="test.png" name="cardName" type="Card Type" />);
    const result = renderer.getRenderOutput();
    expect(typeof result.type).toEqual('function');
    expect(result.type.name).toEqual('Card');
  });

  it('should render description if it exists', () => {
    const renderer = new ShallowRenderer({ depth: 1 });
    renderer.render(<ElderCard imageUrl="test.png" name="CardName" text="DESC" type="Card Type" />);
    const result = renderer.getRenderOutput();
    expect(result.props.description).toEqual('DESC');
  });

  it('should not render description if it does not exists', () => {
    const renderer = new ShallowRenderer({ depth: 1 });
    renderer.render(<ElderCard imageUrl="test.png" name="CardName" type="Card Type" />);
    const result = renderer.getRenderOutput();
    expect(result.props.description).toBeFalsy();
  });
});
