import React, { useState, useEffect } from 'react';
import './App.scss';
import Parser from 'rss-parser';
import { Route } from "react-router-dom";

import { Header } from './components/Header'
import { FeedPage } from './components/FeedPage'

import { feedLinks } from './api/feed-links';
import { Feed } from './components/Feed/Feed';
import { Article } from './components/Article';
import { Container } from './components/Container';
import { Login } from './components/Login';

function App() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    const parser = new Parser();

    const fetchPosts = async () => {
      const CORS_PROXY = "https://corsanywhere.herokuapp.com/";

      for (let i = 0; i < feedLinks.length; i++) {
        const url = CORS_PROXY + feedLinks[i];
        const feed = await parser.parseURL(url)
  
        setFeeds(prevState => [...prevState, feed]);
      }
    }
    fetchPosts()
  }, []);

  // console.log('feeds', feeds);
  return (
    <div className="app">
      <Header />
      <Container>
        <Login />
        {/* <Route
          exact
          path='/'
          render={(routerProps) =>
            <FeedPage feeds={feeds} {...routerProps} />
          }
        />
        <Route
          exact
          path='/:title'
          render={(routerProps) =>
            <Feed {...routerProps} feeds={feeds} />
          }
        />
        <Route
          exact
          path='/:title/:article'
          render={(routerProps) =>
            <Article {...routerProps} feeds={feeds} />
          }
        /> */}
      </Container>
    </div>
  );
}

export default App;
