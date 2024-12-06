import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeArticle } from "../redux/features/savedSlice";

function Saved() {
  const savedArticles = useSelector((state) => state.saved.savedArticles);
  const dispatch = useDispatch();

  console.log(savedArticles);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Saved News</h1>
      <ul>
        {savedArticles.map((article, index) => (
          <li key={index} className="mb-4">
            <a href={article.web_url} target="_blank" rel="noopener noreferrer">
              {article.abstract || "No Title Available"}
            </a>
            <button
              onClick={() => dispatch(removeArticle(article))}
              className="ml-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Un-Save
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Saved;
