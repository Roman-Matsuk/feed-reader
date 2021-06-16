import React from 'react';
import { useHistory } from "react-router-dom";
import { deletePost } from '../../api/posts';

import './FeedCard.scss';

export const FeedCard = ({ feed, setFeeds }) => {
  let history = useHistory();

  return (
    <div className="feed-card">
      <div className="feed-card__body">
        <h3 className="feed-card__title">
           {feed.title}
        </h3>
        {feed.items &&
          <button
            className="feed-card__button button"
            onClick={() => {
              history.push(`/${feed.title}`)
            }}
          >
            See more
          </button>
        }
        <button
          className="feed-card__button button"
          onClick={() => {
            setFeeds(prevState => {
              return prevState.filter(item => item.title !== feed.title)
            });

            if (feed.userId) {
              deletePost(feed.userId);
            }
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
