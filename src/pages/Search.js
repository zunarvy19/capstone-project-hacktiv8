import React, { useState } from "react";
import NewsCard from "../components/NewsCard";

function Search() {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [lastSearch, setLastSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const ARTICLES_PER_PAGE = 8;

  const fetchArticles = async (searchQuery, page) => {
    if (!searchQuery.trim()) {
      setErrorMessage("Please enter a keyword.");
      return;
    }
    setErrorMessage("");
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchQuery}&page=${page}&api-key=${process.env.REACT_APP_NYT_API_KEY}`
      );
      const data = await response.json();
      setArticles(data.response.docs || []);
      setTotalPages(Math.ceil(data.response.meta.hits / ARTICLES_PER_PAGE));
    } catch (error) {
      console.error("Error fetching data:", error);
      setErrorMessage("Failed to fetch news. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setLastSearch(query);
    setCurrentPage(0);
    fetchArticles(query, 0);
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      fetchArticles(lastSearch, nextPage);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
      fetchArticles(lastSearch, prevPage);
    }
  };

  return (
    <div className="container mx-auto pb-5">
      <h1 className="text-3xl font-bold my-3 text-center capitalize">
        {lastSearch ? `${lastSearch} News` : "Search News"}
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
            className="bg-[#222831] text-white px-4 py-2 rounded ml-2 btn text-lg hover:bg-[#222831]"
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
          <div>
            <div className="grid grid-cols-4 gap-x-[1rem] gap-y-4">
              {articles.map((article) => (
                <NewsCard key={article._id} article={article} />
              ))}
            </div>

            <div className="join grid grid-cols-2 mt-6 mx-auto w-1/3">
              <button
                className={`join-item btn btn-outline ${
                  currentPage === 0 ? "btn-disabled" : ""
                }`}
                onClick={handlePrevious}
                disabled={currentPage === 0}
              >
                Previous page
              </button>
              <button
                className={`join-item btn btn-outline ${
                  currentPage >= totalPages - 1 ? "btn-disabled" : ""
                }`}
                onClick={handleNext}
                disabled={currentPage >= totalPages - 1}
              >
                Next
              </button>
            </div>
          </div>
        ) : lastSearch ? (
          <p className="text-gray-500 text-center">
            No news found for "{lastSearch}".
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default Search;
