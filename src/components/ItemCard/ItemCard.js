import React from 'react';
import { useHistory } from "react-router-dom";
import { deletePost } from '../../api/posts';

import './ItemCard.scss';

export const ItemCard = ({ item, setItems }) => {
  let history = useHistory();

  console.log(item);
  return (
    <div className="feed-card">
      <div className="feed-card__body">
        <h3 className="feed-card__title">
           {item.title}
        </h3>
        {item.items &&
          <button
            className="feed-card__button button"
            onClick={() => {
              history.push(`/${item.title}`)
            }}
          >
            See more
          </button>
        }
        <button
          className="feed-card__button button"
          onClick={() => {
            setItems(prevState => {
              return prevState.filter(prevItem => prevItem.title !== item.title)
            });

            if (item.userId) {
              deletePost(item.userId);
            }
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
