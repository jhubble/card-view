/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import CardList from './CardList';
import elderResults from '../testData/elderApi.json';
import elderResults2 from '../testData/elderApi2.json';

// variable for results must start with mock to pass through
let mockApiResults;
jest.mock('./CardFetch', () => () => {
  return Promise.resolve(mockApiResults);
});

describe('CardList component', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    mockApiResults = elderResults;
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });
  it('should show count of cards', async () => {
    await act(async () => {
      ReactDOM.render(<CardList />, container);
    });
    const endContainer = container.querySelector('.end-container');
    expect(endContainer.innerHTML).toMatch(/Viewing/);
  });

  it('should load first page of data when launching', async () => {
    await act(async () => {
      ReactDOM.render(<CardList />, container);
    });
    // TODO: This test depends on the resultant html output. Can we do better?
    const cards = container.querySelectorAll('.stackable.grid .column');
    expect(cards.length).toBe(20);
  });
  it('should load additional pages', async () => {
    mockApiResults = elderResults;
    await act(async () => {
      ReactDOM.render(<CardList />, container);
    });
    mockApiResults = elderResults2;
    await act(async () => {
      container.querySelector('button').dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    const cards = container.querySelectorAll('.stackable.grid .column');
    expect(cards.length).toBe(40);
    const endContainer = container.querySelector('.end-container');
    expect(endContainer.innerHTML).toMatch(/40/);
  });
  it('should not display load more button when there is no more data', async () => {
    mockApiResults = JSON.parse(JSON.stringify(elderResults));
    // eslint-disable-next-line no-underscore-dangle
    mockApiResults._totalCount = 20;
    await act(async () => {
      ReactDOM.render(<CardList />, container);
    });
    const button = container.querySelector('button');
    expect(button).toBe(null);
    const endContainer = container.querySelector('.end-container');
    expect(endContainer.innerHTML).toMatch(/20/);
  });
});
