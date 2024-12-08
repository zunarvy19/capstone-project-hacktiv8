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
    <div className="py-6">
      <h1 className="text-3xl font-bold my-6 text-center">Berita Indonesia</h1>

      <hr className=" border border-gray-200 border-t-2 w-[89%] flex justify-center mx-auto mb-6"></hr>

      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-x-[1rem]">
          {articles.map((article) => (
            <NewsCard key={article._id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Indonesia;
