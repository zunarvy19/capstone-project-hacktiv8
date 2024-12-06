import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";

function Indonesia() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=indonesia&api-key=${process.env.REACT_APP_NYT_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setArticles(data.response.docs));
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Berita Indonesia</h1>
      {articles.map((article) => (
        <NewsCard key={article._id} article={article} />
      ))}
    </div>
  );
}

export default Indonesia;
