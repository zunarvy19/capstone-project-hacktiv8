import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addArticle, removeArticle } from "../redux/features/savedSlice";
import { Link } from "react-router-dom";

function NewsCard({ article }) {
  const dispatch = useDispatch();
  const savedArticles = useSelector((state) => state.saved.savedArticles);
  const isSaved = savedArticles.some((saved) => saved._id === article._id);

  const handleSave = () => {
    if (isSaved) {
      dispatch(removeArticle(article));
    } else {
      dispatch(addArticle(article));
    }
  };

  return (
    <div className="border p-4 mb-4 rounded shadow">
      <h2 className="text-lg font-bold">{article.headline.main}</h2>
      <p>{article.abstract}</p>
      <a
        href={article.web_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        Read more
      </a>
      <button
        onClick={handleSave}
        className={`ml-4 px-4 py-2 rounded ${
          isSaved ? "bg-red-500 text-white hidden" : "bg-green-500 text-white"
        }`}
      >
        {isSaved ? "un-save" : "Save"}
      </button>
      {isSaved && (
        <Link
          to={`${article.web_url}`}
          className="ml-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Detail
        </Link>
      )}
    </div>
  );
}

export default NewsCard;
