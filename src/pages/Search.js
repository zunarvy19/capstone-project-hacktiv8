import React, { useState } from "react";
import NewsCard from "../components/NewsCard";

function Search() {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [lastSearch, setLastSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setErrorMessage("Please enter the keyword.");
      return;
    }
    setLastSearch(query);
    setErrorMessage("");
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${process.env.REACT_APP_NYT_API_KEY}`
      );
      const data = await response.json();
      setArticles(data.response.docs || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      setErrorMessage("Failed to fetch news. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold my-6 text-center capitalize">
        {lastSearch ? `${lastSearch} news` : "Search News"}
      </h1>

      <hr className="border border-gray-200 border-t-2 w-[89%] flex justify-center mx-auto mb-6"></hr>

      <div className="flex flex-col justify-center items-end mx-auto max-w-fit">
        <form
          onSubmit={handleSearch}
          className="flex flex-row max-w-fit my-3 justify-end"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for news..."
            className="border p-2 rounded border-[#222831]"
          />
          <button
            type="submit"
            className="bg-[#222831] text-white px-4 py-2 rounded ml-2"
          >
            Search
          </button>
        </form>

        {errorMessage && (
          <p className="text-red-500 text-center my-2">{errorMessage}</p>
        )}

        {isLoading ? (
          <div className="flex justify-center items-center h-[50vh] mx-auto">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        ) : articles.length > 0 ? (
          <div className="grid grid-cols-4 gap-x-[1rem]">
            {articles.map((article) => (
              <NewsCard key={article._id} article={article} />
            ))}
          </div>
        ) : query && !isLoading ? (
          <p className="text-gray-500 text-center"></p>
        ) : null}
      </div>
    </div>
  );
}

export default Search;
