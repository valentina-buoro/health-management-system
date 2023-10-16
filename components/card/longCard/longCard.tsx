// CardGrid.tsx

import React from 'react';
import Card from './card';

const CardGrid: React.FC = () => {
  const cards = [
    { title: 'Card 1', content: 'Content for Card 1' },
    { title: 'Card 2', content: 'Content for Card 2' },
    { title: 'Card 3', content: 'Content for Card 3' },
    { title: 'Card 4', content: 'Content for Card 4' },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} />
      ))}
    </div>
  );
};

export default CardGrid;
