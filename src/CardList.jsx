/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { Dimmer, Grid, Loader, Message, Visibility } from 'semantic-ui-react';
import CardFetch from './CardFetch';
import ElderCard from './ElderCard';

const CardList = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [availableCards, setAvailableCards] = useState(0);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [searchString, setSearchString] = useState('');

  async function fetchCards() {
    setLoading(true);
    try {
      if (page === 1) {
        setCards([]);
      }
      const result = await CardFetch(page, search);
      if (page === 1) {
        setCards(result.cards);
      } else {
        setCards(cards.concat(result.cards));
      }
      // eslint-disable-next-line no-underscore-dangle
      setAvailableCards(result._totalCount);
      setError(null);
    } catch (e) {
      setError(`Error Loading Cards (server message: ${e})`);
      // error loading cards
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // We should gate on the event, thus allowing search to work
    fetchCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, search]);

  const showMoreHandler = () => {
    if (!loading && cards.length !== availableCards) {
      // setLoading is most likely redundant here.
      // Could another event get triggered before the hook would be run?
      setLoading(true);
      setPage(page + 1);
    }
  };

  const filterResults = () => {
    setSearch(searchString);
    setPage(1);
  };
  return (
    <div>
      <div className="search-box">
        <input
          onChange={e => {
            setSearchString(e.target.value);
          }}
          type="text"
          value={searchString}
        />
        <button className="searchButton" onClick={filterResults} type="button">
          Filter Results
        </button>
      </div>

      <Visibility continuous onBottomVisible={showMoreHandler} once={false}>
        <Dimmer active={loading} page>
          <Loader />
        </Dimmer>
        <Grid columns={4} stackable>
          {cards &&
            cards.map(card => {
              return (
                <Grid.Column key={card.id}>
                  <ElderCard {...card} />
                </Grid.Column>
              );
            })}
        </Grid>
        {error && <Message error>{error}</Message>}
      </Visibility>
      <div className="end-container">
        {`Viewing ${cards.length} out of ${availableCards} cards`}.
        {cards.length !== availableCards && (
          <button className="moreButton" onClick={showMoreHandler} type="button">
            Load More
          </button>
        )}
      </div>
    </div>
  );
};
export default CardList;
