import React from 'react';
import { FeedCard } from '../FeedCard';

import './FeedPage.scss';

export const FeedPage = ({ feeds, setFeeds }) => {
  return (
    <div className={`feed-page`}>
      {feeds.map(feed => (
        <FeedCard
          key={feed.title}
          feed={feed}
          setFeeds={setFeeds}
        />
      ))}
    </div>
  );
}
