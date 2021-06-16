import React, { useEffect, useState } from 'react';
import Parser from 'rss-parser';
import { Route, Switch } from 'react-router-dom';

import { feedLinks } from '../../api/feed-links';
import { Article } from '../Article';
import { Container } from '../Container';
import { Feed } from '../Feed/Feed';
import { FeedPage } from '../FeedPage';
import { Header } from '../Header';

import { getPosts } from '../../api/posts';

export const AppLayout = ({ setIsAuthenticated }) => {
  const [feeds, setFeeds] = useState([]);
  const [links, setLinks] = useState(feedLinks);

  useEffect(() => {
    const parser = new Parser();

    const fetchPosts = async () => {
      const CORS_PROXY = "https://corsanywhere.herokuapp.com/";

      for (let i = 0; i < links.length; i++) {
        const url = CORS_PROXY + feedLinks[i];
        const feed = await parser.parseURL(url)
  
        setFeeds(prevState => [...prevState, feed]);
      }

      getPosts('1').then(res => setFeeds(prevState => [...prevState, ...res]));
    }
    fetchPosts();
  }, [links]);

  return (
    <>
      <Header setIsAuthenticated={setIsAuthenticated} setLinks={setLinks} />
      <Container>
        <Switch>
        <Route
          exact
          path='/'
          render={(routerProps) =>
            <FeedPage feeds={feeds} setFeeds={setFeeds} {...routerProps} />
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
        />
        </Switch>
      </Container>
    </>
  );
}