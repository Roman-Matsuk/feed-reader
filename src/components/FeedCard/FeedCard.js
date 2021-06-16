import React from 'react';
import { useHistory } from "react-router-dom";

import './FeedCard.scss';

export const FeedCard = ({ feed }) => {
  let history = useHistory();


  return (
    <div className="feed-card">
      <div className="feed-card__body">
        <h3 className="feed-card__title">
           {feed.title}
        </h3>
        <button
          className="feed-card__button button"
          onClick={() => {
            history.push(`/${feed.title}`)
          }}
        >
          See more
        </button>
      </div>
    </div>
  );
};
