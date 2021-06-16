import React from 'react';
import { useHistory } from 'react-router-dom';

import './Header.scss';

export const Header = ({ setIsAuthenticated, setLinks }) => {
  const history = useHistory();

  return (
    <header className="header header--parameters">
      <h1 className="header__title">Feeds</h1>
      <button
          className="header__button button button--secondary"
          type='button'
          onClick={() => {
            history.push('/');
            setIsAuthenticated(false);
          }}
        >
          Logout
      </button>
    </header>
  )
};
