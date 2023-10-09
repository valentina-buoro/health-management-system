"use client"
// CardRow.tsx

import React from 'react';
import Card from '../../components/card';

const CardRow: React.FC = () => {
  const cards = [
    { title: 'Card 1', content: 'Content for Card 1' },
    { title: 'Card 2', content: 'Content for Card 2' },
    { title: 'Card 3', content: 'Content for Card 3' },
    { title: 'Card 4', content: 'Content for Card 4' },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} />
      ))}
    </div>
  );
};

export default CardRow;


