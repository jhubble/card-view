/* ElderCard
 * Displays an Elder Scrolls card.
 *
 * At present, uses the Semantic UI card:
 * https://react.semantic-ui.com/views/card/#types-card
 */

import React, { useEffect, useState } from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ElderCard = ({ imageUrl, name, set, text, type }) => {
  const [status, setStatus] = useState(false);
  const setName = set && set.name;
  useEffect(() => {
    const status = window.localStorage.getItem(name) === 'true';
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setStatus(status);
  }, [name]);
  const toggleStatus = () => {
    setStatus(!status);
    window.localStorage.setItem(name, `${!status}`);
  };
  const cardName = name + (status ? '*' : '');
  return (
    <Card
      description={text}
      extra={set && `Set: ${setName}`}
      fluid
      header={cardName}
      image={imageUrl}
      meta={type}
      onClick={() => {
        toggleStatus();
      }}
    />
  );
};

ElderCard.propTypes = {
  /* URL to image to display in card */
  imageUrl: PropTypes.string.isRequired,
  /* Name of card */
  name: PropTypes.string.isRequired,
  /* Name of card set. Not set as required because occasionally not present */
  set: PropTypes.shape({ name: PropTypes.string }),
  /* Text description of card. Not set as required because occasionally not present  */
  text: PropTypes.string,
  /* Type of card */
  type: PropTypes.string.isRequired,
};
export default ElderCard;
