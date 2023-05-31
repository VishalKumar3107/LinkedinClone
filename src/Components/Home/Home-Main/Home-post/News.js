import React, { useState, useEffect } from 'react';
import './News.css';

const News = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://inshorts.deta.dev/news?category=all')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok');
      })
      .then(data => setNews(data.data))
      .catch(error => setError(error.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  

  return (
    <div className="abc">
      <div className='xyz' >
        {news.map(article => (
          <ul key={article.title}>
            <li>
              <h6>{article.title}</h6>
              <p className="article-content">{article.date}</p>
            </li>
          </ul>
        ))}
      </div>
      
    </div>
  );
};

export default News;
