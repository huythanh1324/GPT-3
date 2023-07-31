import React from 'react';
import './article.css';

const Article = ({imageUrl, date, title}) => {
  return (
    <div className="gpt3__blog-container_aritcle">
      <div className="gpt3__blog-container_article-image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="gpt3__blog-container_article-container">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read full article</p>
      </div>
    </div>
  )
}

export default Article