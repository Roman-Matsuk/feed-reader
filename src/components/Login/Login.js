import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import './Login.scss';

import { getUser } from '../../api/user';

export const Login = ({ setIsAuthenticated }) => {
  const [user, setUser] = useState({
    email: '',
    phone: ''
  });
  const history = useHistory();

  useEffect(() => {
    getUser().then(setUser);
  }, [])

  return (
    <div className="login">
      <label className="login__label" htmlFor="email">
        Email
      </label>
      <input className="login__input"
        id="email"
        type="email"
        value={user.email}
        onChange={event => {
          setUser(prevState => ({...prevState, email: event.target.value}))
        }}
      />
      <label className="login__label" htmlFor="password">
        Password
      </label>
      <input className="login__input"
        id="password"
        type="password"
        value={user.phone}
        onChange={event => {
          setUser(prevState => ({...prevState, phone: event.target.value}))
        }}
      />
      <button className="login__button button"
        type="button"
        onClick={() => {
          history.push('/');
          setIsAuthenticated(true);
          window.localStorage.setItem('isAuthenticated', true);
        }}
      >
        Log in
      </button>
    </div>
  )
}