import React from 'react';

import './Article.scss';

export const Article = ({ history, location, match, feeds }) => {

  return (
    <div className="article">
      <h3 className="article__title">{history.location.state.title}</h3>
      <article className="article__content">
        {history.location.state.content}
      </article>
      <a
        className="article__link"
        href={history.location.state.link}
        target="_blank"
        rel="noreferrer"
      >
        Link to sourse
      </a>
    </div>
  );
};