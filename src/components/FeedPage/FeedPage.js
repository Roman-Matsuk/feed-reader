import React from 'react';
import { FeedCard } from '../FeedCard';

import './FeedPage.scss';

export const FeedPage = ({ feeds }) => {
  return (
    <div className={`feed-page`}>
      {feeds.map(feed => (
        <FeedCard
          key={feed.title}
          feed={feed}
        />
      ))}
    </div>
  );
}
