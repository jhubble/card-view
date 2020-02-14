import React, { useEffect, useState } from 'react';
import CardFetch from './CardFetch';
import ElderCard from './ElderCard';

const CardList = () => {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const result = await CardFetch();
      setData(result.cards);
    }
    fetchData();
  }, []);
  return (
    <div>
      <p>Lots of cards</p>
      <div>
        {data &&
          data.map(card => {
            // eslint-disable-next-line react/jsx-props-no-spreading
            return <ElderCard {...card} />;
          })}
      </div>
    </div>
  );
};
export default CardList;
