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
    <div className="">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
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
        </figure>

        <div className="card-body">
          <h2 className="card-title">{article.headline.main}</h2>
          <p className="text-base">{article.abstract}</p>
          <div className=" card-actions justify-end">
            <button
              onClick={handleSave}
              className={`mr-4 px-4 py-2 rounded ${
                isSaved
                  ? "bg-red-500 text-white hidden"
                  : "border border-[#387478] text-[#387478] font-semibold btn hover:bg-white hover:border-[#387478]"
              }`}
            >
              {isSaved ? "Un-save" : "Save"}
            </button>
            {isSaved && (
              <Link
                to={`${article.web_url}`}
                className="mr-4 border border-[#387478] text-[#387478] font-semibold px-4 py-2 rounded"
              >
                Detail
              </Link>
            )}
            <a href={article.web_url} target="_blank" rel="noopener noreferrer">
              <button className="btn px-4 py-2 rounded bg-[#387478] text-white hover:bg-[#387478]">
                News Page
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
