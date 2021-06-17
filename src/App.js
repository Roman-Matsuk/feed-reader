import React, { useEffect, useState } from 'react';
import './App.scss';

import { Login } from './components/Login';
import { AppLayout } from './components/AppLayout';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState();
  // const isAuthenticated = window.localStorage.getItem('isAuthenticated');
  const auth = localStorage.getItem('isAuthenticated');
  
  useEffect(() => {
    setIsAuthenticated(auth)
  }, [auth]);

  return (
    <div className="app">
      {isAuthenticated === 'true'
        ? <AppLayout setIsAuthenticated={setIsAuthenticated} />
        : <Login setIsAuthenticated={setIsAuthenticated} />
      }
    </div>
  );
}

export default App;
