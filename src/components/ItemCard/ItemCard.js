import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { deletePost, editPost } from '../../api/posts';

import './ItemCard.scss';

export const ItemCard = ({ item, setItems }) => {
  const [title, setTitle] = useState(item.title);
  const [isEditMode, setIsEditMode] = useState(false);
  let history = useHistory();

  return (
    <div className="item-card">
      <div className="item-card__body">
        {isEditMode
          ? (
            <>
              <input
                className="input"
                type="text"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value)
                }}
              />
              <button
                className="item-card__button button"
                onClick={() => {
                  editPost('1', title);
                  setItems(prevState => {
                    return prevState.map(prev => {
                      if (prev.id === item.id) {
                        prev = { ...prev, title}
                      };

                      return prev;
                    })
                  });
                  setIsEditMode(false);
                }}
              >
                Save
              </button>
            </>
            )
          : (
            <h3 className="item-card__title">
              {item.title}
            </h3>
          )
        }
        {item.items &&
          <button
            className="item-card__button button"
            onClick={() => {
              history.push(`/${item.title}`)
            }}
          >
            See more
          </button>
        }
        {item.userId && !isEditMode &&
          <button
            className="item-card__button button"
            onClick={() => {
              setIsEditMode(true);
            }}
          >
            Edit
          </button>
        }
        <button
          className="item-card__button button"
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
