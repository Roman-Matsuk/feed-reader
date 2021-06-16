import React, { useEffect, useState } from 'react';

import './Feed.scss';

export const Feed = ({ history, location, match, feeds }) => {
  const [currentFeed, setCurrentFeed] = useState(null);

  useEffect(() => {
    const current = feeds.find(feed => match.url.includes(feed.title));

    setCurrentFeed(current);
  }, [match, feeds])

  // console.log('currentFeed', currentFeed);

  return (
    <ul className="feed">
      {currentFeed && (
        currentFeed.items.map(item => (
          <li
            className="feed__item"
            onClick={() => history.push(`/${currentFeed.title}/${item.title}`, item)}
            key={item.title}
          >
            {item.title}
          </li>
        ))
      )}
    </ul>
  );
};
