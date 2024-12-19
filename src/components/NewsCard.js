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

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  return (
    <>
      <div className="border rounded-lg overflow-hidden shadow-md flex flex-col h-full">
        {article.multimedia?.length > 0 ? (
          <img
            src={`https://www.nytimes.com/${article.multimedia[0]?.url}`}
            alt={article.headline.main}
            className="w-full h-48 object-cover"
          />
        ) : (
          <img
            src="https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="News"
            className="w-full h-48 object-cover"
          />
        )}
        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-lg font-semibold">
            {article?.headline?.main || "No headline available"}
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            {truncateText(article?.abstract, 20) || "No description available"}
          </p>
          <p className="text-sm text-gray-400 my-3">
            {article?.pub_date
              ? new Date(article.pub_date).toDateString()
              : "No date"}
          </p>
          <div className="mt-auto flex justify-end items-end">
            <button
              onClick={handleSave}
              className={`mr-4 rounded ${
                isSaved
                  ? "btn btn-error px-4 py-2 text-white"
                  : "btn btn-outline"
              }`}
            >
              {isSaved ? "Un-save" : "Save"}
            </button>
            <Link
              to={article.web_url}
              className="mr-4 border btn btn-neutral px-4 py-2 rounded bg-p"
            >
              Read
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsCard;
