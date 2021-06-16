import React, { useState } from 'react';
import './App.scss';

import { Login } from './components/Login';
import { AppLayout } from './components/AppLayout/AppLayout';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="app">
      {isAuthenticated
        ? <AppLayout setIsAuthenticated={setIsAuthenticated} />
        : <Login setIsAuthenticated={setIsAuthenticated} />
      }
    </div>
  );
}

export default App;
