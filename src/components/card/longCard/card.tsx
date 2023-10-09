// Card.tsx

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

interface CardProps {
  title: string;
  content: string;
  
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <div className="px-6 py-4"> 
     
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{content}</p>
        <Link href='#'>{content}</Link>
      </div>
    </div>
  );
};

export default Card;
