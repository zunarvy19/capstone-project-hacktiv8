import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";

function Covid() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const ARTICLES_PER_PAGE = 9;

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=covid19&page=${currentPage}&api-key=${process.env.REACT_APP_NYT_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        const limitedArticles = data.response.docs.slice(0, ARTICLES_PER_PAGE);
        setArticles(limitedArticles);
        setTotalPages(Math.ceil(data.response.meta.hits / ARTICLES_PER_PAGE));
      })
      .catch((error) => console.error("Error fetching articles:", error))
      .finally(() => setIsLoading(false));
  }, [currentPage]);

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 0) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="container mx-auto pb-5">
      <h1 className="text-3xl font-bold my-3 text-center">Covid-19 News</h1>

      <hr className="border border-gray-200 border-t-2 w-[89%] flex justify-center mx-auto mb-6"></hr>

      {isLoading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : (
        <div>
          <div className="flex justify-center">
            {articles.length > 0 ? (
              <div className="grid grid-cols-3 gap-x-[1rem] gap-y-4">
                {articles.map((article) => (
                  <NewsCard key={article._id} article={article} />
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center">No news found.</p>
            )}
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
      )}
    </div>
  );
}

export default Covid;
