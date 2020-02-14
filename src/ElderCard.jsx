import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const ElderCard = ({ image, name, setName, text, type }) => (
  <Card>
    <Image src={image} ui={false} wrapped />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className="date">{setName}</span>
      </Card.Meta>
      <Card.Description>{text}</Card.Description>
    </Card.Content>
    <Card.Content extra>{type}</Card.Content>
  </Card>
);

export default ElderCard;
