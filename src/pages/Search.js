import React, { useState } from "react";
import NewsCard from "../components/NewsCard";

function Search() {
  const [query, setQuery] = useState("");
  const [lastSearch, setLastSearch] = useState("");
  const [articles, setArticles] = useState([]);

  const handleSearch = () => {
    fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${process.env.REACT_APP_NYT_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setArticles(data.response.docs));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (query.trim()) {
  //     setLastSearch(query);
  //   }
  // };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold my-6 text-center capitalize">
        {lastSearch} News
      </h1>

      <hr className=" border border-gray-200 border-t-2 w-[89%] flex justify-center mx-auto mb-6"></hr>

      <div className="flex flex-col justify-center items-end mx-auto max-w-fit">
        <div className="flex flex-row max-w-fit my-3 justify-end">
          <form>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for news..."
              className="border p-2 rounded border-[#222831]"
            />
            <button
              onClick={handleSearch}
              className="bg-[#222831] text-white px-4 py-2 rounded ml-2"
            >
              Search
            </button>
          </form>
        </div>

        <div className="grid grid-cols-4 gap-x-[1rem]">
          {articles.map((article) => (
            <NewsCard key={article._id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
