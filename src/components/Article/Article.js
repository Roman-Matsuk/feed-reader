import React from 'react';

import './Article.scss';

export const Article = ({ history, location, match }) => {

  return (
    <div className="article">
      <h3 className="article__title">{history.location.state.title}</h3>
      <article className="article__content">
        {history.location.state.contentSnippet}
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