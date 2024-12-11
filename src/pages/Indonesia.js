import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";

function Programming() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=indonesia&api-key=${process.env.REACT_APP_NYT_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setArticles(data.response.docs))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-2 text-center">Indonesia News</h1>

      <hr className="border border-gray-200 border-t-2 w-[89%] flex justify-center mx-auto mb-6"></hr>

      {isLoading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : (
        <div className="flex justify-center">
          {articles.length > 0 ? (
            <div className="grid grid-cols-3 gap-x-[1rem]">
              {articles.map((article) => (
                <NewsCard key={article._id} article={article} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center">No news found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Programming;
