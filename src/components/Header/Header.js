import React from 'react';
import { useHistory } from 'react-router-dom';

import './Header.scss';

export const Header = ({ setIsAuthenticated, setSelectedItems, setIsAddNew }) => {
  const history = useHistory();

  return (
    <header className="header header--parameters">
      <h1 className="header__title">Feeds</h1>
      <div className="header__options">
        <button
            className="header__button button button--secondary"
            type='button'
            onClick={() => {
              setSelectedItems('feeds');
              setIsAddNew(false);
              history.push('/');
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
              history.push('/');
            }}
          >
            Posts
        </button>
        <button
            className="header__button button button--secondary"
            type='button'
            onClick={() => {
              setIsAddNew(true);
              history.push('/');
            }}
          >
            Add New
        </button>
      </div>
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
