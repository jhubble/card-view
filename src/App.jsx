/* Generic Entry point for the Elder List Card application
 *
 * Renders the CardList component with some basic
 */

import React from 'react';
import CardList from './CardList';

function App() {
  return (
    <div className="App">
      <h1 data-testid="elder-header">Elder Scrolls Card Viewer</h1>
      <p>
        Scroll down to view more cards. Data from{' '}
        <a href="https://docs.elderscrollslegends.io/">https://docs.elderscrollslegends.io/</a>
      </p>
      <CardList />
    </div>
  );
}

export default App;
