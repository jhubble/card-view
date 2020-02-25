/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { Dimmer, Grid, Loader, Visibility } from 'semantic-ui-react';
import CardFetch from './CardFetch';
import ElderCard from './ElderCard';

const CardList = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [availableCards, setAvailableCards] = useState(0);

  async function fetchCards() {
    setLoading(true);
    try {
      const result = await CardFetch(page);
      setCards(cards.concat(result.cards));
      // eslint-disable-next-line no-underscore-dangle
      setAvailableCards(result._totalCount);
    } catch (e) {
      // error loading cards
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (availableCards && availableCards === cards.length) {
      // Don't try to fetch cards if we already are displaying all cards
      return;
    }
    fetchCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div>
      <Visibility
        continuous
        onBottomVisible={() => {
          !loading && setPage(page + 1);
        }}
        once={false}
      >
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
      </Visibility>
      <div className="end-container">{`Viewing ${cards.length} out of ${availableCards} cards`}</div>
    </div>
  );
};
export default CardList;
