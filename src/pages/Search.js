import React, { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);

  const handleSearch = () => {
    fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${process.env.REACT_APP_NYT_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setArticles(data.response.docs));
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Search News</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for news..."
        className="border p-2 rounded mb-4"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
      >
        Search
      </button>
      <ul className="mt-4">
        {articles.map((article) => (
          <li key={article._id} className="mb-4">
            <a href={article.web_url} target="_blank" rel="noopener noreferrer">
              {article.headline.main}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
