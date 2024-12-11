import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";

function Latest() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?facet=true&facet_fields=day_of_week&sort=newest&api-key=${process.env.REACT_APP_NYT_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        const limitedArticles = data.response.docs.slice(0, 8);
        setArticles(limitedArticles);
      })
      .catch((error) => console.error("Error fetching articles:", error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-4 text-start">Latest News</h1>

      {isLoading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="md:col-span-1 ">
              <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-md">
                <img
                  src={
                    articles[0]?.multimedia?.[0]?.url
                      ? `https://www.nytimes.com/${articles[0].multimedia[0]?.url}`
                      : "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt={articles[0]?.headline?.main || "Main News"}
                  className="w-full h-64 object-cover"
                />
                <a
                  href={articles[0]?.web_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                </a>
                <div className="absolute bottom-4 left-4 text-white">
                  <a
                    href={articles[0]?.web_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h2 className="text-xl md:text-2xl font-bold">
                      {articles[0]?.headline?.main || "No headline available"}
                    </h2>
                    <p className="mt-2 text-sm">
                      {articles[0]?.abstract || "No description available"}
                    </p>
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4 md:col-span-2">
              {articles.slice(1, 4).map((article) => (
                <div key={article._id} className="flex space-x-4">
                  <img
                    src={
                      `https://www.nytimes.com/${article.multimedia[0]?.url}` ||
                      "https://via.placeholder.com/150"
                    }
                    alt="News"
                    className="min-w-fit w-52 h-24 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">
                      {article?.headline?.main || "No headline available"}
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">
                      {article?.pub_date
                        ? new Date(article.pub_date).toDateString()
                        : "No date"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {articles.slice(4).map((article) => (
              <NewsCard key={article._id} article={article} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Latest;
