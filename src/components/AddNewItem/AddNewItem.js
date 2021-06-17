import React, { useState } from 'react';
import { addPost } from '../../api/posts';

import './AddNewItem.scss';

export const AddNewItem = ({ selectedItems, setLinks, setItems }) => {
  const [link, setLink] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  
  const render = () => {
    switch (selectedItems) {
      case 'feeds':
        return (
          <>
            <label className="add-form__label" htmlFor="feed">
              Feed link
            </label>
            <input
              className="add-form__input input"
              id='feed'
              type='text'
              value={link}
              onChange={event => setLink(event.target.value)}
            />
          </>
        );

      case 'posts':
        return (
          <>
            <label className="add-form__label" htmlFor="title">
              Title
            </label>
            <input
              className="add-form__input input"
              id="title"
              type='text'
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
            <label className="add-form__label" htmlFor="title">
              Body
            </label>
            <input
              className="add-form__input input"
              id="body"
              type='text'
              value={body}
              onChange={event => setBody(event.target.value)}
            />
          </>
        )

      default:
        return (
          <p>Something went wrong...</p>
        )
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedItems === 'feeds') {
      setLinks(prevState => [...prevState, link]);
    } else {
      addPost('1', title, body);
      setItems(prevState => [...prevState, { title, body, userId: '1'}]);
    };

    setLink('');
    setTitle('');
    setBody('');
  }

  return (
    <form
      className="add-form"
      onSubmit={handleSubmit}
    >
      {render()}
      <button
        className="add-form__submit button"
        type="submit"
      >
        Submit
      </button>
    </form>
  )
};