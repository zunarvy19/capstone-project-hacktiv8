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
      <div className="border p-4 mb-4 rounded shadow-lg max-w-sm max-h-full">
        <h2 className="text-xl font-bold">{article.headline.main}</h2>
        <p className="my-6 text-base">{article.abstract}</p>
        <div className="mt-10 flex justify-end">
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
  );
}

export default NewsCard;
