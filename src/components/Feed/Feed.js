import React, { useEffect, useState } from 'react';

import './Feed.scss';

export const Feed = ({ history, location, match, items }) => {
  const [currentFeed, setCurrentFeed] = useState(null);

  useEffect(() => {
    const current = items.find(feed => match.url.includes(feed.title));

    setCurrentFeed(current);
  }, [match, items])

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
