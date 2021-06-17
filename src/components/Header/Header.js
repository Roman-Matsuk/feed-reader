import React from 'react';
import { useHistory } from 'react-router-dom';

import './Header.scss';

export const Header = ({ setIsAuthenticated, setSelectedItems, setIsAddNew }) => {
  const history = useHistory();

  return (
    <header className="header header--parameters">
      <h1 className="header__title">Feeds</h1>
      <span>
        <button
            className="header__button button button--secondary"
            type='button'
            onClick={() => {
              setSelectedItems('feeds');
              setIsAddNew(false);
            }}
          >
            Feeds
        </button>
        <button
            className="header__button button button--secondary"
            type='button'
            onClick={() => {
              setSelectedItems('posts');
              setIsAddNew(false);
            }}
          >
            Posts
        </button>
        <button
            className="header__button button button--secondary"
            type='button'
            onClick={() => {
              setIsAddNew(true);
            }}
          >
            Add New
        </button>
      </span>
      <button
          className="header__button button button--secondary"
          type='button'
          onClick={() => {
            history.push('/');
            setIsAuthenticated(false);
            window.localStorage.setItem('isAuthenticated', false);
          }}
        >
          Logout
      </button>
    </header>
  )
};
