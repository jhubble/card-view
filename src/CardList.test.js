/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import CardList from './CardList';
import CardFetch from './CardFetch';
import elderResults from '../testData/elderApi.json';

// TODO: Need to finish tests here
describe.skip('CardList component', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });
  it('should load first page of data when launching', () => {
    act(() => {
      ReactDOM.render(<CardList />, container);
    });
    console.log('container', container);
  });
});
