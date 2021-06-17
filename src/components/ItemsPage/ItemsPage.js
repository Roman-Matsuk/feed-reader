import React from 'react';
import { ItemCard } from '../ItemCard';

import './ItemsPage.scss';

export const ItemsPage = ({ items, setItems }) => {
  return (
    <div className={`feed-page`}>
      {items.map(item => (
        <ItemCard
          key={item.title}
          item={item}
          setItems={setItems}
        />
      ))}
    </div>
  );
}
