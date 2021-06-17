import React, { useEffect, useState } from 'react';
import Parser from 'rss-parser';
import { Route, Switch } from 'react-router-dom';

import { feedLinks } from '../../api/feed-links';
import { Article } from '../Article';
import { Container } from '../Container';
import { Feed } from '../Feed';
import { ItemsPage } from '../ItemsPage';
import { Header } from '../Header';

import { getPosts } from '../../api/posts';
import { AddNewItem } from '../AddNewItem/AddNewItem';

export const AppLayout = ({ setIsAuthenticated }) => {
  const [items, setItems] = useState([]);
  const [links, setLinks] = useState(feedLinks);
  const [selectedItems, setSelectedItems] = useState('feeds');
  const [isAddNew, setIsAddNew] = useState(false);

  useEffect(() => {
    if (selectedItems === 'feeds') {
      const parser = new Parser();
      const feeds = [];
  
      const fetchPosts = async () => {
        const CORS_PROXY = "https://corsanywhere.herokuapp.com/";
  
        for (let i = 0; i < links.length; i++) {
          console.log();
          const url = CORS_PROXY + links[i];
          const feed = await parser.parseURL(url)
          
          feeds.push(feed);
        }
        
        setItems(feeds);
      }
      fetchPosts();
    } else {
      getPosts('1').then(res => setItems([...res]));
    }

  }, [links, selectedItems]);
  console.log(links);
  return (
    <>
      <Header
        setIsAuthenticated={setIsAuthenticated}
        setSelectedItems={setSelectedItems}
        setIsAddNew={setIsAddNew}
      />
      <Container>
        <Switch>
          <Route
            exact
            path='/'
            render={(routerProps) => {
              if (isAddNew) {
               return <AddNewItem selectedItems={selectedItems} setLinks={setLinks} setItems={setItems} />
              }

              return <ItemsPage items={items} setItems={setItems} {...routerProps} />
            }}
          />
          <Route
            exact
            path='/:title'
            render={(routerProps) =>
              <Feed {...routerProps} items={items} />
            }
          />
          <Route
            exact
            path='/:title/:article'
            render={(routerProps) =>
              <Article {...routerProps} items={items} />
            }
          />
        </Switch>
      </Container>
    </>
  );
}